import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SessionController {
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
   * sessionControllerChangePassword - Change the password of a customer given their existing and new password.
  **/
  sessionControllerChangePassword(
    req: operations.SessionControllerChangePasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerChangePasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerChangePasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/session/password", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerChangePasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * sessionControllerCreateLandlordLogin - Send a request to the in-tray to create a landlord login.
  **/
  sessionControllerCreateLandlordLogin(
    req: operations.SessionControllerCreateLandlordLoginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerCreateLandlordLoginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerCreateLandlordLoginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/session/createlandlordlogin", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerCreateLandlordLoginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * sessionControllerGetSessionInfo - Gets information about the currently logged on customer.
  **/
  sessionControllerGetSessionInfo(
    req: operations.SessionControllerGetSessionInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerGetSessionInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerGetSessionInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/session", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SessionControllerGetSessionInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sessionControllerGetSessionInfo200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                res.sessionControllerGetSessionInfo200ApplicationXMLString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.sessionControllerGetSessionInfo200TextJSONString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                res.sessionControllerGetSessionInfo200TextXMLString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * sessionControllerLogin - Login as a customer given their username and password.
  **/
  sessionControllerLogin(
    req: operations.SessionControllerLoginRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerLoginResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerLoginRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/session", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerLoginResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.sessionControllerLogin200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                res.sessionControllerLogin200ApplicationXMLString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/json`)) {
                res.sessionControllerLogin200TextJSONString = JSON.stringify(httpRes?.data);
            }
            if (utils.matchContentType(contentType, `text/xml`)) {
                res.sessionControllerLogin200TextXMLString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * sessionControllerLogout - Logout a customer previously logged in via the Login endpoint.
  **/
  sessionControllerLogout(
    req: operations.SessionControllerLogoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerLogoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerLogoutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/session", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SessionControllerLogoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * sessionControllerResetPassword - Reset the customer's password. An email will be sent out to reset.
  **/
  sessionControllerResetPassword(
    req: operations.SessionControllerResetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionControllerResetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionControllerResetPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/customer/{shortName}/session/resetpassword", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionControllerResetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

}
