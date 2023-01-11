import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://supersim.twilio.com",
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
   * createEsimProfile - Order an eSIM Profile.
  **/
  createEsimProfile(
    req: operations.CreateEsimProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEsimProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEsimProfileRequest(req);
    }
    
    let baseURL: string = operations.CreateEsimProfileServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/ESimProfiles";

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
        const res: operations.CreateEsimProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1EsimProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createFleet - Create a Fleet
  **/
  createFleet(
    req: operations.CreateFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFleetRequest(req);
    }
    
    let baseURL: string = operations.CreateFleetServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Fleets";

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
        const res: operations.CreateFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1Fleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createIpCommand - Send an IP Command to a Super SIM.
  **/
  createIpCommand(
    req: operations.CreateIpCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIpCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIpCommandRequest(req);
    }
    
    let baseURL: string = operations.CreateIpCommandServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/IpCommands";

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
        const res: operations.CreateIpCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1IpCommand = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createNetworkAccessProfile - Create a new Network Access Profile
  **/
  createNetworkAccessProfile(
    req: operations.CreateNetworkAccessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkAccessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkAccessProfileRequest(req);
    }
    
    let baseURL: string = operations.CreateNetworkAccessProfileServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/NetworkAccessProfiles";

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
        const res: operations.CreateNetworkAccessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1NetworkAccessProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createNetworkAccessProfileNetwork - Add a Network resource to the Network Access Profile resource.
  **/
  createNetworkAccessProfileNetwork(
    req: operations.CreateNetworkAccessProfileNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateNetworkAccessProfileNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateNetworkAccessProfileNetworkRequest(req);
    }
    
    let baseURL: string = operations.CreateNetworkAccessProfileNetworkServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks", req.pathParams);

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
        const res: operations.CreateNetworkAccessProfileNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1NetworkAccessProfileNetworkAccessProfileNetwork = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createSim - Register a Super SIM to your Account
  **/
  createSim(
    req: operations.CreateSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSimRequest(req);
    }
    
    let baseURL: string = operations.CreateSimServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Sims";

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
        const res: operations.CreateSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1Sim = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createSmsCommand - Send SMS Command to a Sim.
  **/
  createSmsCommand(
    req: operations.CreateSmsCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSmsCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSmsCommandRequest(req);
    }
    
    let baseURL: string = operations.CreateSmsCommandServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SmsCommands";

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
        const res: operations.CreateSmsCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1SmsCommand = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteNetworkAccessProfileNetwork - Remove a Network resource from the Network Access Profile resource's.
  **/
  deleteNetworkAccessProfileNetwork(
    req: operations.DeleteNetworkAccessProfileNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNetworkAccessProfileNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNetworkAccessProfileNetworkRequest(req);
    }
    
    let baseURL: string = operations.DeleteNetworkAccessProfileNetworkServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNetworkAccessProfileNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchEsimProfile - Fetch an eSIM Profile.
  **/
  fetchEsimProfile(
    req: operations.FetchEsimProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchEsimProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchEsimProfileRequest(req);
    }
    
    let baseURL: string = operations.FetchEsimProfileServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/ESimProfiles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchEsimProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1EsimProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchFleet - Fetch a Fleet instance from your account.
  **/
  fetchFleet(
    req: operations.FetchFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFleetRequest(req);
    }
    
    let baseURL: string = operations.FetchFleetServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Fleets/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1Fleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchIpCommand - Fetch IP Command instance from your account.
  **/
  fetchIpCommand(
    req: operations.FetchIpCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchIpCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchIpCommandRequest(req);
    }
    
    let baseURL: string = operations.FetchIpCommandServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/IpCommands/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchIpCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1IpCommand = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchNetwork - Fetch a Network resource.
  **/
  fetchNetwork(
    req: operations.FetchNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchNetworkRequest(req);
    }
    
    let baseURL: string = operations.FetchNetworkServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Networks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1Network = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchNetworkAccessProfile - Fetch a Network Access Profile instance from your account.
  **/
  fetchNetworkAccessProfile(
    req: operations.FetchNetworkAccessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchNetworkAccessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchNetworkAccessProfileRequest(req);
    }
    
    let baseURL: string = operations.FetchNetworkAccessProfileServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/NetworkAccessProfiles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchNetworkAccessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1NetworkAccessProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchNetworkAccessProfileNetwork - Fetch a Network Access Profile resource's Network resource.
  **/
  fetchNetworkAccessProfileNetwork(
    req: operations.FetchNetworkAccessProfileNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchNetworkAccessProfileNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchNetworkAccessProfileNetworkRequest(req);
    }
    
    let baseURL: string = operations.FetchNetworkAccessProfileNetworkServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchNetworkAccessProfileNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1NetworkAccessProfileNetworkAccessProfileNetwork = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchSim - Fetch a Super SIM instance from your account.
  **/
  fetchSim(
    req: operations.FetchSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSimRequest(req);
    }
    
    let baseURL: string = operations.FetchSimServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Sims/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1Sim = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchSmsCommand - Fetch SMS Command instance from your account.
  **/
  fetchSmsCommand(
    req: operations.FetchSmsCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchSmsCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchSmsCommandRequest(req);
    }
    
    let baseURL: string = operations.FetchSmsCommandServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/SmsCommands/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchSmsCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1SmsCommand = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listBillingPeriod - Retrieve a list of Billing Periods for a Super SIM.
  **/
  listBillingPeriod(
    req: operations.ListBillingPeriodRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBillingPeriodResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBillingPeriodRequest(req);
    }
    
    let baseURL: string = operations.ListBillingPeriodServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Sims/{SimSid}/BillingPeriods", req.pathParams);
    
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
        const res: operations.ListBillingPeriodResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listBillingPeriodResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listEsimProfile - Retrieve a list of eSIM Profiles.
  **/
  listEsimProfile(
    req: operations.ListEsimProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEsimProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEsimProfileRequest(req);
    }
    
    let baseURL: string = operations.ListEsimProfileServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/ESimProfiles";
    
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
        const res: operations.ListEsimProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listEsimProfileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listFleet - Retrieve a list of Fleets from your account.
  **/
  listFleet(
    req: operations.ListFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFleetRequest(req);
    }
    
    let baseURL: string = operations.ListFleetServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Fleets";
    
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
        const res: operations.ListFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listFleetResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listIpCommand - Retrieve a list of IP Commands from your account.
  **/
  listIpCommand(
    req: operations.ListIpCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIpCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIpCommandRequest(req);
    }
    
    let baseURL: string = operations.ListIpCommandServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/IpCommands";
    
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
        const res: operations.ListIpCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listIpCommandResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listNetwork - Retrieve a list of Network resources.
  **/
  listNetwork(
    req: operations.ListNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListNetworkRequest(req);
    }
    
    let baseURL: string = operations.ListNetworkServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Networks";
    
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
        const res: operations.ListNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listNetworkResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listNetworkAccessProfile - Retrieve a list of Network Access Profiles from your account.
  **/
  listNetworkAccessProfile(
    req: operations.ListNetworkAccessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListNetworkAccessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListNetworkAccessProfileRequest(req);
    }
    
    let baseURL: string = operations.ListNetworkAccessProfileServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/NetworkAccessProfiles";
    
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
        const res: operations.ListNetworkAccessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listNetworkAccessProfileResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listNetworkAccessProfileNetwork - Retrieve a list of Network Access Profile resource's Network resource.
  **/
  listNetworkAccessProfileNetwork(
    req: operations.ListNetworkAccessProfileNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListNetworkAccessProfileNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListNetworkAccessProfileNetworkRequest(req);
    }
    
    let baseURL: string = operations.ListNetworkAccessProfileNetworkServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks", req.pathParams);
    
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
        const res: operations.ListNetworkAccessProfileNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listNetworkAccessProfileNetworkResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listSettingsUpdate - Retrieve a list of Settings Updates.
  **/
  listSettingsUpdate(
    req: operations.ListSettingsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSettingsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSettingsUpdateRequest(req);
    }
    
    let baseURL: string = operations.ListSettingsUpdateServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SettingsUpdates";
    
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
        const res: operations.ListSettingsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listSettingsUpdateResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listSim - Retrieve a list of Super SIMs from your account.
  **/
  listSim(
    req: operations.ListSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSimRequest(req);
    }
    
    let baseURL: string = operations.ListSimServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Sims";
    
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
        const res: operations.ListSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listSimResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listSimIpAddress - Retrieve a list of IP Addresses for the given Super SIM.
  **/
  listSimIpAddress(
    req: operations.ListSimIpAddressRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSimIpAddressResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSimIpAddressRequest(req);
    }
    
    let baseURL: string = operations.ListSimIpAddressServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Sims/{SimSid}/IpAddresses", req.pathParams);
    
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
        const res: operations.ListSimIpAddressResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listSimIpAddressResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listSmsCommand - Retrieve a list of SMS Commands from your account.
  **/
  listSmsCommand(
    req: operations.ListSmsCommandRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListSmsCommandResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListSmsCommandRequest(req);
    }
    
    let baseURL: string = operations.ListSmsCommandServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/SmsCommands";
    
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
        const res: operations.ListSmsCommandResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listSmsCommandResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listUsageRecord - List UsageRecords
  **/
  listUsageRecord(
    req: operations.ListUsageRecordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUsageRecordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUsageRecordRequest(req);
    }
    
    let baseURL: string = operations.ListUsageRecordServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/UsageRecords";
    
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
        const res: operations.ListUsageRecordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listUsageRecordResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateFleet - Updates the given properties of a Super SIM Fleet instance from your account.
  **/
  updateFleet(
    req: operations.UpdateFleetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFleetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFleetRequest(req);
    }
    
    let baseURL: string = operations.UpdateFleetServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Fleets/{Sid}", req.pathParams);

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
        const res: operations.UpdateFleetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1Fleet = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateNetworkAccessProfile - Updates the given properties of a Network Access Profile in your account.
  **/
  updateNetworkAccessProfile(
    req: operations.UpdateNetworkAccessProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNetworkAccessProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNetworkAccessProfileRequest(req);
    }
    
    let baseURL: string = operations.UpdateNetworkAccessProfileServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/NetworkAccessProfiles/{Sid}", req.pathParams);

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
        const res: operations.UpdateNetworkAccessProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1NetworkAccessProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateSim - Updates the given properties of a Super SIM instance from your account.
  **/
  updateSim(
    req: operations.UpdateSimRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSimResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSimRequest(req);
    }
    
    let baseURL: string = operations.UpdateSimServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Sims/{Sid}", req.pathParams);

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
        const res: operations.UpdateSimResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1Sim = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.supersimV1Sim = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}