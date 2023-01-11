import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://media.twilio.com",
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
  
  createMediaProcessor(
    req: operations.CreateMediaProcessorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMediaProcessorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMediaProcessorRequest(req);
    }
    
    let baseURL: string = operations.CreateMediaProcessorServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/MediaProcessors";

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
        const res: operations.CreateMediaProcessorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1MediaProcessor = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createPlayerStreamer(
    req: operations.CreatePlayerStreamerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePlayerStreamerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePlayerStreamerRequest(req);
    }
    
    let baseURL: string = operations.CreatePlayerStreamerServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/PlayerStreamers";

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
        const res: operations.CreatePlayerStreamerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamer = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createPlayerStreamerPlaybackGrant(
    req: operations.CreatePlayerStreamerPlaybackGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePlayerStreamerPlaybackGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePlayerStreamerPlaybackGrantRequest(req);
    }
    
    let baseURL: string = operations.CreatePlayerStreamerPlaybackGrantServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/PlayerStreamers/{Sid}/PlaybackGrant", req.pathParams);

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
        const res: operations.CreatePlayerStreamerPlaybackGrantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteMediaRecording - Deletes a MediaRecording resource identified by a SID.
  **/
  deleteMediaRecording(
    req: operations.DeleteMediaRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMediaRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMediaRecordingRequest(req);
    }
    
    let baseURL: string = operations.DeleteMediaRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/MediaRecordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMediaRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchMediaProcessor - Returns a single MediaProcessor resource identified by a SID.
  **/
  fetchMediaProcessor(
    req: operations.FetchMediaProcessorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMediaProcessorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMediaProcessorRequest(req);
    }
    
    let baseURL: string = operations.FetchMediaProcessorServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/MediaProcessors/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMediaProcessorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1MediaProcessor = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchMediaRecording - Returns a single MediaRecording resource identified by a SID.
  **/
  fetchMediaRecording(
    req: operations.FetchMediaRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMediaRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMediaRecordingRequest(req);
    }
    
    let baseURL: string = operations.FetchMediaRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/MediaRecordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMediaRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1MediaRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchPlayerStreamer - Returns a single PlayerStreamer resource identified by a SID.
  **/
  fetchPlayerStreamer(
    req: operations.FetchPlayerStreamerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchPlayerStreamerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchPlayerStreamerRequest(req);
    }
    
    let baseURL: string = operations.FetchPlayerStreamerServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/PlayerStreamers/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchPlayerStreamerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamer = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchPlayerStreamerPlaybackGrant - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
  **/
  fetchPlayerStreamerPlaybackGrant(
    req: operations.FetchPlayerStreamerPlaybackGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchPlayerStreamerPlaybackGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchPlayerStreamerPlaybackGrantRequest(req);
    }
    
    let baseURL: string = operations.FetchPlayerStreamerPlaybackGrantServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/PlayerStreamers/{Sid}/PlaybackGrant", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchPlayerStreamerPlaybackGrantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listMediaProcessor - Returns a list of MediaProcessors.
  **/
  listMediaProcessor(
    req: operations.ListMediaProcessorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMediaProcessorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMediaProcessorRequest(req);
    }
    
    let baseURL: string = operations.ListMediaProcessorServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/MediaProcessors";
    
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
        const res: operations.ListMediaProcessorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listMediaProcessorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listMediaRecording - Returns a list of MediaRecordings.
  **/
  listMediaRecording(
    req: operations.ListMediaRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMediaRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMediaRecordingRequest(req);
    }
    
    let baseURL: string = operations.ListMediaRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/MediaRecordings";
    
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
        const res: operations.ListMediaRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listMediaRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listPlayerStreamer - Returns a list of PlayerStreamers.
  **/
  listPlayerStreamer(
    req: operations.ListPlayerStreamerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPlayerStreamerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPlayerStreamerRequest(req);
    }
    
    let baseURL: string = operations.ListPlayerStreamerServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/PlayerStreamers";
    
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
        const res: operations.ListPlayerStreamerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listPlayerStreamerResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateMediaProcessor - Updates a MediaProcessor resource identified by a SID.
  **/
  updateMediaProcessor(
    req: operations.UpdateMediaProcessorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMediaProcessorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMediaProcessorRequest(req);
    }
    
    let baseURL: string = operations.UpdateMediaProcessorServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/MediaProcessors/{Sid}", req.pathParams);

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
        const res: operations.UpdateMediaProcessorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1MediaProcessor = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updatePlayerStreamer - Updates a PlayerStreamer resource identified by a SID.
  **/
  updatePlayerStreamer(
    req: operations.UpdatePlayerStreamerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePlayerStreamerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePlayerStreamerRequest(req);
    }
    
    let baseURL: string = operations.UpdatePlayerStreamerServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/PlayerStreamers/{Sid}", req.pathParams);

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
        const res: operations.UpdatePlayerStreamerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mediaV1PlayerStreamer = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}