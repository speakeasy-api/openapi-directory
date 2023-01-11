import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Nodes {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * prodTtSasportalNodesDevicesSignDevice - Signs a device.
  **/
  prodTtSasportalNodesDevicesSignDevice(
    req: operations.ProdTtSasportalNodesDevicesSignDeviceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesDevicesSignDeviceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesDevicesSignDeviceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{name}:signDevice", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesDevicesSignDeviceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalEmpty = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesDevicesUpdateSigned - Updates a signed device.
  **/
  prodTtSasportalNodesDevicesUpdateSigned(
    req: operations.ProdTtSasportalNodesDevicesUpdateSignedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesDevicesUpdateSignedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesDevicesUpdateSignedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{name}:updateSigned", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesDevicesUpdateSignedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesDelete - Deletes a node.
  **/
  prodTtSasportalNodesNodesDelete(
    req: operations.ProdTtSasportalNodesNodesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{name}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesNodesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalEmpty = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesDeploymentsCreate - Creates a new deployment.
  **/
  prodTtSasportalNodesNodesDeploymentsCreate(
    req: operations.ProdTtSasportalNodesNodesDeploymentsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesDeploymentsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesDeploymentsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{parent}/deployments", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesNodesDeploymentsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalDeployment = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesDeploymentsList - Lists deployments.
  **/
  prodTtSasportalNodesNodesDeploymentsList(
    req: operations.ProdTtSasportalNodesNodesDeploymentsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesDeploymentsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesDeploymentsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{parent}/deployments", req.pathParams);
    
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
        const res: operations.ProdTtSasportalNodesNodesDeploymentsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalListDeploymentsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesDevicesCreate - Creates a device under a node or customer.
  **/
  prodTtSasportalNodesNodesDevicesCreate(
    req: operations.ProdTtSasportalNodesNodesDevicesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesDevicesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesDevicesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{parent}/devices", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesNodesDevicesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesDevicesCreateSigned - Creates a signed device under a node or customer.
  **/
  prodTtSasportalNodesNodesDevicesCreateSigned(
    req: operations.ProdTtSasportalNodesNodesDevicesCreateSignedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesDevicesCreateSignedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesDevicesCreateSignedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{parent}/devices:createSigned", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesNodesDevicesCreateSignedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalDevice = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesDevicesList - Lists devices under a node or customer.
  **/
  prodTtSasportalNodesNodesDevicesList(
    req: operations.ProdTtSasportalNodesNodesDevicesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesDevicesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesDevicesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{parent}/devices", req.pathParams);
    
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
        const res: operations.ProdTtSasportalNodesNodesDevicesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalListDevicesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesGet - Returns a requested node.
  **/
  prodTtSasportalNodesNodesGet(
    req: operations.ProdTtSasportalNodesNodesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{name}", req.pathParams);
    
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
        const res: operations.ProdTtSasportalNodesNodesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalNode = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesMove - Moves a node under another node or customer.
  **/
  prodTtSasportalNodesNodesMove(
    req: operations.ProdTtSasportalNodesNodesMoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesMoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesMoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{name}:move", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesNodesMoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalOperation = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesNodesCreate - Creates a new node.
  **/
  prodTtSasportalNodesNodesNodesCreate(
    req: operations.ProdTtSasportalNodesNodesNodesCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesNodesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesNodesCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{parent}/nodes", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesNodesNodesCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalNode = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesNodesList - Lists nodes.
  **/
  prodTtSasportalNodesNodesNodesList(
    req: operations.ProdTtSasportalNodesNodesNodesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesNodesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesNodesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{parent}/nodes", req.pathParams);
    
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
        const res: operations.ProdTtSasportalNodesNodesNodesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalListNodesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * prodTtSasportalNodesNodesPatch - Updates an existing node.
  **/
  prodTtSasportalNodesNodesPatch(
    req: operations.ProdTtSasportalNodesNodesPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProdTtSasportalNodesNodesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProdTtSasportalNodesNodesPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1alpha1/{name}", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProdTtSasportalNodesNodesPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sasPortalNode = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
