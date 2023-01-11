import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Translations {
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
   * getDocumentTranslations - Get a list of strings and its translations in the document.
  **/
  getDocumentTranslations(
    req: operations.GetDocumentTranslationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentTranslationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentTranslationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/documents/{documentId}/translations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentTranslationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.stringList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDocumentTranslationsForLanguage - Get a list of strings and its translations in the document for this target language of the project.
  **/
  getDocumentTranslationsForLanguage(
    req: operations.GetDocumentTranslationsForLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentTranslationsForLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentTranslationsForLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/documents/{documentId}/translations/{language}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentTranslationsForLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.stringList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getProjectTranslations - Deprecated. Use /projects/{projectId}/strings instead.
  **/
  getProjectTranslations(
    req: operations.GetProjectTranslationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectTranslationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectTranslationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/translations", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectTranslationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.stringList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getProjectTranslationsForLanguage - Deprecated. use /projects/{projectId}/strings/{language} instead.
  **/
  getProjectTranslationsForLanguage(
    req: operations.GetProjectTranslationsForLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectTranslationsForLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectTranslationsForLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/translations/{language}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectTranslationsForLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.stringList = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
