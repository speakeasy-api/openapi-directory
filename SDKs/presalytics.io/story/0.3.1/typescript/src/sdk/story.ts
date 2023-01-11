import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Story {
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
   * storyGet - Story: Get List of User Stories
   *
   * Returns a list of stories for this user identifie via the access token presentated to the api
  **/
  storyGet(
    req: operations.StoryGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";
    
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
        const res: operations.StoryGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.stories = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdAnalytics - Story: View Analytics
   *
   * returns an html document containing session and event metrics for the story
  **/
  storyIdAnalytics(
    req: operations.StoryIdAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdAnalyticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/analytics", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.revealJsPresenationWithAnalyticsData = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `text/html`)) {
                res.loginButton = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdDelete - Story: Delete by Id
   *
   * Remove a story and dependant data.
  **/
  storyIdDelete(
    req: operations.StoryIdDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdFileOoxmlautomationidDelete - Story: Delete Subdocument
   *
   * Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)
  **/
  storyIdFileOoxmlautomationidDelete(
    req: operations.StoryIdFileOoxmlautomationidDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdFileOoxmlautomationidDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdFileOoxmlautomationidDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/file/{ooxml_automation_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdFileOoxmlautomationidDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdFileOoxmlautomationidGet - Story: Download Updated File
   *
   * Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)
  **/
  storyIdFileOoxmlautomationidGet(
    req: operations.StoryIdFileOoxmlautomationidGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdFileOoxmlautomationidGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdFileOoxmlautomationidGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/file/{ooxml_automation_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdFileOoxmlautomationidGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.openxmlformats-officedocument.presentationml.presentation`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.powerpointPresentation = out;
            }
            if (utils.matchContentType(contentType, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.wordDocument = out;
            }
            if (utils.matchContentType(contentType, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.excelSpreadsheet = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdFilePost - Story: Upload a File To Existing Story
   *
   * Upload a file to an existing story
  **/
  storyIdFilePost(
    req: operations.StoryIdFilePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdFilePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdFilePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/file", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.StoryIdFilePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.story = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdGet - Story: Get by Id
   *
   * Returns story metadata, inlcuding json object with story outline
  **/
  storyIdGet(
    req: operations.StoryIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}", req.pathParams);
    
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
        const res: operations.StoryIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.story = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdOutlineGet - Story: Get Story Outline
   *
   * Returns Story's outline
  **/
  storyIdOutlineGet(
    req: operations.StoryIdOutlineGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdOutlineGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdOutlineGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/outline", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdOutlineGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.storyIdOutlineGet200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.status = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 410:
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdOutlinePost - Story: Post Story Outline
   *
   * Update a story outline.
  **/
  storyIdOutlinePost(
    req: operations.StoryIdOutlinePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdOutlinePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdOutlinePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/outline", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.StoryIdOutlinePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdPublic - Story: Public Link to Story Reveal.js Document
   *
   * returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True
  **/
  storyIdPublic(
    req: operations.StoryIdPublicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdPublicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdPublicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/public/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdPublicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.revealJsPresenation = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 302:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdPut - Story: Modify
   *
   * Update story metadata, including story outline
  **/
  storyIdPut(
    req: operations.StoryIdPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdPutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.story = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdReveal - Story: Get Story at Reveal.js Document
   *
   * returns an html document containing a reveal.js epresentation of the story
  **/
  storyIdReveal(
    req: operations.StoryIdRevealRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdRevealResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdRevealRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/reveal", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdRevealResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.revealJsPresenation = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `text/html`)) {
                res.loginButton = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyIdStatusGet - Story: Get Story Status
   *
   * Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)
  **/
  storyIdStatusGet(
    req: operations.StoryIdStatusGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryIdStatusGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryIdStatusGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{id}/status", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StoryIdStatusGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.status = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyPost - Story: Upload
   *
   * Upload new story to presalytics api
  **/
  storyPost(
    req: operations.StoryPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.StoryPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.story = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyPostFile - Story: Upload a File
   *
   * Upload new story to presalytics api via an Open Office Xml file
  **/
  storyPostFile(
    req: operations.StoryPostFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryPostFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryPostFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/file";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.StoryPostFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.story = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * storyPostFileJson - Story: Upload a File (base64)
   *
   * Upload new story to presalytics api via an Open Office Xml file
  **/
  storyPostFileJson(
    req: operations.StoryPostFileJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StoryPostFileJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StoryPostFileJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/file/json";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.StoryPostFileJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.story = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.problemDetail = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
