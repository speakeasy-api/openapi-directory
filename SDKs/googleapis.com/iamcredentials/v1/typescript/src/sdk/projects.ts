import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Projects {
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
   * iamcredentialsProjectsServiceAccountsGenerateAccessToken - Generates an OAuth 2.0 access token for a service account.
  **/
  iamcredentialsProjectsServiceAccountsGenerateAccessToken(
    req: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/{name}:generateAccessToken", req.pathParams);

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
        const res: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.generateAccessTokenResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * iamcredentialsProjectsServiceAccountsGenerateIdToken - Generates an OpenID Connect ID token for a service account.
  **/
  iamcredentialsProjectsServiceAccountsGenerateIdToken(
    req: operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/{name}:generateIdToken", req.pathParams);

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
        const res: operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.generateIdTokenResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * iamcredentialsProjectsServiceAccountsSignBlob - Signs a blob using a service account's system-managed private key.
  **/
  iamcredentialsProjectsServiceAccountsSignBlob(
    req: operations.IamcredentialsProjectsServiceAccountsSignBlobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IamcredentialsProjectsServiceAccountsSignBlobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IamcredentialsProjectsServiceAccountsSignBlobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/{name}:signBlob", req.pathParams);

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
        const res: operations.IamcredentialsProjectsServiceAccountsSignBlobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.signBlobResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * iamcredentialsProjectsServiceAccountsSignJwt - Signs a JWT using a service account's system-managed private key.
  **/
  iamcredentialsProjectsServiceAccountsSignJwt(
    req: operations.IamcredentialsProjectsServiceAccountsSignJwtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IamcredentialsProjectsServiceAccountsSignJwtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IamcredentialsProjectsServiceAccountsSignJwtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/{name}:signJwt", req.pathParams);

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
        const res: operations.IamcredentialsProjectsServiceAccountsSignJwtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.signJwtResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
