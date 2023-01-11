import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Strings {
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
   * getProjectStrings - Get a list of strings and its translations in the project.
  **/
  getProjectStrings(
    req: operations.GetProjectStringsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectStringsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectStringsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/strings", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectStringsResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getProjectStringsForLanguage - Get a list of strings and its translations in the project for this target language in the project.
  **/
  getProjectStringsForLanguage(
    req: operations.GetProjectStringsForLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectStringsForLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectStringsForLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/strings/{language}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectStringsForLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getStrings - Get a list of client/corporate strings (20 per page)
  **/
  getStrings(
    req: operations.GetStringsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStringsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStringsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/strings";
    
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
        const res: operations.GetStringsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * packageProjectTranslationMemory - Get the translation memory of a project in TMX format
  **/
  packageProjectTranslationMemory(
    req: operations.PackageProjectTranslationMemoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageProjectTranslationMemoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageProjectTranslationMemoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/strings/package", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.PackageProjectTranslationMemoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.asyncOperationStatus = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.packageProjectTranslationMemory200ApplicationXMLBinaryString = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * packageProjectTranslationMemoryForLanguage - Get the translation memory of a project in TMX format
  **/
  packageProjectTranslationMemoryForLanguage(
    req: operations.PackageProjectTranslationMemoryForLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageProjectTranslationMemoryForLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageProjectTranslationMemoryForLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/strings/{languageCode}/package", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.PackageProjectTranslationMemoryForLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.asyncOperationStatus = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * packageProjectTranslationMemoryForLanguageStatus - If package call was async, check the status of the request
  **/
  packageProjectTranslationMemoryForLanguageStatus(
    req: operations.PackageProjectTranslationMemoryForLanguageStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageProjectTranslationMemoryForLanguageStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageProjectTranslationMemoryForLanguageStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/strings/{languageCode}/package/status", req.pathParams);
    
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
        const res: operations.PackageProjectTranslationMemoryForLanguageStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.asyncOperationStatus = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * packageProjectTranslationMemoryStatus - If package call was async, check the status of the request
  **/
  packageProjectTranslationMemoryStatus(
    req: operations.PackageProjectTranslationMemoryStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageProjectTranslationMemoryStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageProjectTranslationMemoryStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{projectId}/strings/package/status", req.pathParams);
    
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
        const res: operations.PackageProjectTranslationMemoryStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.asyncOperationStatus = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * packageUserTranslationMemory - Get the translation memory of a client or corporate in TMX format
  **/
  packageUserTranslationMemory(
    req: operations.PackageUserTranslationMemoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageUserTranslationMemoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageUserTranslationMemoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/strings/{languageCode}/package", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.PackageUserTranslationMemoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.asyncOperationStatus = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.packageUserTranslationMemory200ApplicationXMLBinaryString = out;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * packageUserTranslationMemoryForLanguageStatus - If package call was async, check the status of the request
  **/
  packageUserTranslationMemoryForLanguageStatus(
    req: operations.PackageUserTranslationMemoryForLanguageStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageUserTranslationMemoryForLanguageStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageUserTranslationMemoryForLanguageStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/strings/{languageCode}/package/status", req.pathParams);
    
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
        const res: operations.PackageUserTranslationMemoryForLanguageStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.asyncOperationStatus = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postStrings - Translate Strings with MT
  **/
  postStrings(
    req: operations.PostStringsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostStringsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostStringsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/strings";

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
        const res: operations.PostStringsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.machineTranslatedStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateTranslationMemoryUnit - Update translation
   *
   * Update a translation by adding a new translation memory unit item
  **/
  updateTranslationMemoryUnit(
    req: operations.UpdateTranslationMemoryUnitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTranslationMemoryUnitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTranslationMemoryUnitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/strings";

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
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateTranslationMemoryUnitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

}
