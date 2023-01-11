import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Payees {
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
   * deletePayeeByIdV3 - Delete Payee by Id
   *
   * <p>Use v4 instead</p>
   * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
   * <p>* Payee ID is not found</p>
   * <p>* If Payee has not been on-boarded</p>
   * <p>* If Payee is in grace period</p>
   * <p>* If Payee has existing payments</p>
   * 
  **/
  deletePayeeByIdV3(
    req: operations.DeletePayeeByIdV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePayeeByIdV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePayeeByIdV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payees/{payeeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePayeeByIdV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * deletePayeeByIdV4 - Delete Payee by Id
   *
   * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
   * <p>* Payee ID is not found</p>
   * <p>* If Payee has not been on-boarded</p>
   * <p>* If Payee is in grace period</p>
   * <p>* If Payee has existing payments</p>
   * 
  **/
  deletePayeeByIdV4(
    req: operations.DeletePayeeByIdV4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePayeeByIdV4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePayeeByIdV4Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v4/payees/{payeeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePayeeByIdV4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getPayeeByIdV3 - Get Payee by Id
   *
   * <p>Use v4 instead</p>
   * <p>Get Payee by Id</p>
   * 
  **/
  getPayeeByIdV3(
    req: operations.GetPayeeByIdV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPayeeByIdV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPayeeByIdV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payees/{payeeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetPayeeByIdV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.payeeDetailResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getPayeeByIdV4 - Get Payee by Id
   *
   * Get Payee by Id
  **/
  getPayeeByIdV4(
    req: operations.GetPayeeByIdV4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPayeeByIdV4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPayeeByIdV4Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v4/payees/{payeeId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetPayeeByIdV4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.payeeDetailResponse2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * listPayeeChangesV3 - List Payee Changes
   *
   * <p>Use v4 instead</p>
   * <p>Get a paginated response listing payee changes.</p>
   * 
  **/
  listPayeeChangesV3(
    req: operations.ListPayeeChangesV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPayeeChangesV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPayeeChangesV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/payees/deltas";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.ListPayeeChangesV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.payeeDeltaResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * listPayeeChangesV4 - List Payee Changes
   *
   * Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
   * - dbaName
   * - displayName
   * - email
   * - onboardedStatus
   * - payeeCountry
   * - payeeId
   * - remoteId
   * 
  **/
  listPayeeChangesV4(
    req: operations.ListPayeeChangesV4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPayeeChangesV4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPayeeChangesV4Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/payees/deltas";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.ListPayeeChangesV4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.payeeDeltaResponse2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
        }

        return res;
      })
  }

  
  /**
   * listPayeesV3 - List Payees
   *
   * <p>Use v4 instead</p>
   * Get a paginated response listing the payees for a payor.
   * 
  **/
  listPayeesV3(
    req: operations.ListPayeesV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPayeesV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPayeesV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/payees";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.ListPayeesV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pagedPayeeResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listPayeesV4 - List Payees
   *
   * Get a paginated response listing the payees for a payor.
  **/
  listPayeesV4(
    req: operations.ListPayeesV4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPayeesV4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPayeesV4Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/payees";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.ListPayeesV4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pagedPayeeResponse2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * payeeDetailsUpdateV3 - Update Payee Details
   *
   * <p>Use v4 instead</p>
   * <p>Update payee details for the given Payee Id.<p>
   * 
  **/
  payeeDetailsUpdateV3(
    req: operations.PayeeDetailsUpdateV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PayeeDetailsUpdateV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PayeeDetailsUpdateV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payees/{payeeId}/payeeDetailsUpdate", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.PayeeDetailsUpdateV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * payeeDetailsUpdateV4 - Update Payee Details
   *
   * <p>Update payee details for the given Payee Id.<p>
   * 
  **/
  payeeDetailsUpdateV4(
    req: operations.PayeeDetailsUpdateV4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PayeeDetailsUpdateV4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PayeeDetailsUpdateV4Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v4/payees/{payeeId}/payeeDetailsUpdate", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.PayeeDetailsUpdateV4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postV3PayeesPayeeIdRemoteIdUpdate - Update Payee Remote Id
   *
   * <p>Use v4 instead</p>
   * <p>Update the remote Id for the given Payee Id.</p>
   * 
  **/
  postV3PayeesPayeeIdRemoteIdUpdate(
    req: operations.PostV3PayeesPayeeIdRemoteIdUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV3PayeesPayeeIdRemoteIdUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV3PayeesPayeeIdRemoteIdUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payees/{payeeId}/remoteIdUpdate", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.PostV3PayeesPayeeIdRemoteIdUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse409 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postV4PayeesPayeeIdRemoteIdUpdate - Update Payee Remote Id
   *
   * <p>Update the remote Id for the given Payee Id.</p>
   * 
  **/
  postV4PayeesPayeeIdRemoteIdUpdate(
    req: operations.PostV4PayeesPayeeIdRemoteIdUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV4PayeesPayeeIdRemoteIdUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV4PayeesPayeeIdRemoteIdUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v4/payees/{payeeId}/remoteIdUpdate", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.PostV4PayeesPayeeIdRemoteIdUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse409 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
