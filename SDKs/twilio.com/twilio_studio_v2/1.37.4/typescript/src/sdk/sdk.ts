import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://studio.twilio.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
  }
  
  /**
   * createExecution - Triggers a new Execution for the Flow
  **/
  createExecution(
    req: operations.CreateExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateExecutionRequest(req);
    }
    
    let baseURL: string = operations.CreateExecutionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowExecution = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createFlow - Create a Flow.
  **/
  createFlow(
    req: operations.CreateFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFlowRequest(req);
    }
    
    let baseURL: string = operations.CreateFlowServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Flows";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2Flow = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteExecution - Delete the Execution and all Steps relating to it.
  **/
  deleteExecution(
    req: operations.DeleteExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteExecutionRequest(req);
    }
    
    let baseURL: string = operations.DeleteExecutionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteFlow - Delete a specific Flow.
  **/
  deleteFlow(
    req: operations.DeleteFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFlowRequest(req);
    }
    
    let baseURL: string = operations.DeleteFlowServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchExecution - Retrieve an Execution
  **/
  fetchExecution(
    req: operations.FetchExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExecutionRequest(req);
    }
    
    let baseURL: string = operations.FetchExecutionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowExecution = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchExecutionContext - Retrieve the most recent context for an Execution.
  **/
  fetchExecutionContext(
    req: operations.FetchExecutionContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExecutionContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExecutionContextRequest(req);
    }
    
    let baseURL: string = operations.FetchExecutionContextServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchExecutionContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowExecutionExecutionContext = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchExecutionStep - Retrieve a Step.
  **/
  fetchExecutionStep(
    req: operations.FetchExecutionStepRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExecutionStepResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExecutionStepRequest(req);
    }
    
    let baseURL: string = operations.FetchExecutionStepServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchExecutionStepResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowExecutionExecutionStep = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchExecutionStepContext - Retrieve the context for an Execution Step.
  **/
  fetchExecutionStepContext(
    req: operations.FetchExecutionStepContextRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchExecutionStepContextResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchExecutionStepContextRequest(req);
    }
    
    let baseURL: string = operations.FetchExecutionStepContextServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchExecutionStepContextResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowExecutionExecutionStepExecutionStepContext = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchFlow - Retrieve a specific Flow.
  **/
  fetchFlow(
    req: operations.FetchFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFlowRequest(req);
    }
    
    let baseURL: string = operations.FetchFlowServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2Flow = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchFlowRevision - Retrieve a specific Flow revision.
  **/
  fetchFlowRevision(
    req: operations.FetchFlowRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFlowRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFlowRevisionRequest(req);
    }
    
    let baseURL: string = operations.FetchFlowRevisionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{Sid}/Revisions/{Revision}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchFlowRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowFlowRevision = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchTestUser - Fetch flow test users
  **/
  fetchTestUser(
    req: operations.FetchTestUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchTestUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchTestUserRequest(req);
    }
    
    let baseURL: string = operations.FetchTestUserServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{Sid}/TestUsers", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchTestUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowTestUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listExecution - Retrieve a list of all Executions for the Flow.
  **/
  listExecution(
    req: operations.ListExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListExecutionRequest(req);
    }
    
    let baseURL: string = operations.ListExecutionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listExecutionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listExecutionStep - Retrieve a list of all Steps for an Execution.
  **/
  listExecutionStep(
    req: operations.ListExecutionStepRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListExecutionStepResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListExecutionStepRequest(req);
    }
    
    let baseURL: string = operations.ListExecutionStepServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListExecutionStepResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listExecutionStepResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listFlow - Retrieve a list of all Flows.
  **/
  listFlow(
    req: operations.ListFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFlowRequest(req);
    }
    
    let baseURL: string = operations.ListFlowServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Flows";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listFlowResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listFlowRevision - Retrieve a list of all Flows revisions.
  **/
  listFlowRevision(
    req: operations.ListFlowRevisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFlowRevisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFlowRevisionRequest(req);
    }
    
    let baseURL: string = operations.ListFlowRevisionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{Sid}/Revisions", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListFlowRevisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listFlowRevisionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateExecution - Update the status of an Execution to `ended`.
  **/
  updateExecution(
    req: operations.UpdateExecutionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateExecutionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateExecutionRequest(req);
    }
    
    let baseURL: string = operations.UpdateExecutionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{FlowSid}/Executions/{Sid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateExecutionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowExecution = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateFlow - Update a Flow.
  **/
  updateFlow(
    req: operations.UpdateFlowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFlowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFlowRequest(req);
    }
    
    let baseURL: string = operations.UpdateFlowServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{Sid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateFlowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2Flow = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateFlowValidate - Validate flow JSON definition
  **/
  updateFlowValidate(
    req: operations.UpdateFlowValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFlowValidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFlowValidateRequest(req);
    }
    
    let baseURL: string = operations.UpdateFlowValidateServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v2/Flows/Validate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateFlowValidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowValidate = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateTestUser - Update flow test users
  **/
  updateTestUser(
    req: operations.UpdateTestUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTestUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTestUserRequest(req);
    }
    
    let baseURL: string = operations.UpdateTestUserServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v2/Flows/{Sid}/TestUsers", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateTestUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.studioV2FlowTestUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}