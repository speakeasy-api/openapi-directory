import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://video.twilio.com",
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
  
  createComposition(
    req: operations.CreateCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCompositionRequest(req);
    }
    
    let baseURL: string = operations.CreateCompositionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Compositions";

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
        const res: operations.CreateCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1Composition = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createCompositionHook(
    req: operations.CreateCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.CreateCompositionHookServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CompositionHooks";

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
        const res: operations.CreateCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1CompositionHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createCompositionSettings(
    req: operations.CreateCompositionSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompositionSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCompositionSettingsRequest(req);
    }
    
    let baseURL: string = operations.CreateCompositionSettingsServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CompositionSettings/Default";

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
        const res: operations.CreateCompositionSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1CompositionSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createRecordingSettings(
    req: operations.CreateRecordingSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRecordingSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRecordingSettingsRequest(req);
    }
    
    let baseURL: string = operations.CreateRecordingSettingsServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/RecordingSettings/Default";

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
        const res: operations.CreateRecordingSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RecordingSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createRoom(
    req: operations.CreateRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRoomRequest(req);
    }
    
    let baseURL: string = operations.CreateRoomServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Rooms";

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
        const res: operations.CreateRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1Room = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteComposition - Delete a Recording Composition resource identified by a Composition SID.
  **/
  deleteComposition(
    req: operations.DeleteCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCompositionRequest(req);
    }
    
    let baseURL: string = operations.DeleteCompositionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Compositions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteCompositionHook - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
  **/
  deleteCompositionHook(
    req: operations.DeleteCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.DeleteCompositionHookServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/CompositionHooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteRecording - Delete a Recording resource identified by a Recording SID.
  **/
  deleteRecording(
    req: operations.DeleteRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRecordingRequest(req);
    }
    
    let baseURL: string = operations.DeleteRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Recordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  deleteRoomRecording(
    req: operations.DeleteRoomRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRoomRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRoomRecordingRequest(req);
    }
    
    let baseURL: string = operations.DeleteRoomRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRoomRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchComposition - Returns a single Composition resource identified by a Composition SID.
  **/
  fetchComposition(
    req: operations.FetchCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCompositionRequest(req);
    }
    
    let baseURL: string = operations.FetchCompositionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Compositions/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1Composition = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchCompositionHook - Returns a single CompositionHook resource identified by a CompositionHook SID.
  **/
  fetchCompositionHook(
    req: operations.FetchCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.FetchCompositionHookServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/CompositionHooks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1CompositionHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchCompositionSettings(
    req: operations.FetchCompositionSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCompositionSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCompositionSettingsRequest(req);
    }
    
    let baseURL: string = operations.FetchCompositionSettingsServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CompositionSettings/Default";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCompositionSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1CompositionSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchRecording - Returns a single Recording resource identified by a Recording SID.
  **/
  fetchRecording(
    req: operations.FetchRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingRequest(req);
    }
    
    let baseURL: string = operations.FetchRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Recordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1Recording = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchRecordingSettings(
    req: operations.FetchRecordingSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRecordingSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRecordingSettingsRequest(req);
    }
    
    let baseURL: string = operations.FetchRecordingSettingsServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/RecordingSettings/Default";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRecordingSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RecordingSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchRoom(
    req: operations.FetchRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomRequest(req);
    }
    
    let baseURL: string = operations.FetchRoomServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1Room = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchRoomParticipant(
    req: operations.FetchRoomParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomParticipantRequest(req);
    }
    
    let baseURL: string = operations.FetchRoomParticipantServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRoomParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchRoomParticipantPublishedTrack - Returns a single Track resource represented by TrackName or SID.
  **/
  fetchRoomParticipantPublishedTrack(
    req: operations.FetchRoomParticipantPublishedTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomParticipantPublishedTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomParticipantPublishedTrackRequest(req);
    }
    
    let baseURL: string = operations.FetchRoomParticipantPublishedTrackServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRoomParticipantPublishedTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantPublishedTrack = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchRoomParticipantSubscribeRule - Returns a list of Subscribe Rules for the Participant.
  **/
  fetchRoomParticipantSubscribeRule(
    req: operations.FetchRoomParticipantSubscribeRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomParticipantSubscribeRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomParticipantSubscribeRuleRequest(req);
    }
    
    let baseURL: string = operations.FetchRoomParticipantSubscribeRuleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRoomParticipantSubscribeRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantSubscribeRule = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchRoomParticipantSubscribedTrack - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
  **/
  fetchRoomParticipantSubscribedTrack(
    req: operations.FetchRoomParticipantSubscribedTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomParticipantSubscribedTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomParticipantSubscribedTrackRequest(req);
    }
    
    let baseURL: string = operations.FetchRoomParticipantSubscribedTrackServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRoomParticipantSubscribedTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantSubscribedTrack = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchRoomRecording(
    req: operations.FetchRoomRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomRecordingRequest(req);
    }
    
    let baseURL: string = operations.FetchRoomRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRoomRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomRecording = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fetchRoomRecordingRule - Returns a list of Recording Rules for the Room.
  **/
  fetchRoomRecordingRule(
    req: operations.FetchRoomRecordingRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoomRecordingRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoomRecordingRuleRequest(req);
    }
    
    let baseURL: string = operations.FetchRoomRecordingRuleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/RecordingRules", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRoomRecordingRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomRecordingRule = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listComposition - List of all Recording compositions.
  **/
  listComposition(
    req: operations.ListCompositionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCompositionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCompositionRequest(req);
    }
    
    let baseURL: string = operations.ListCompositionServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Compositions";
    
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
        const res: operations.ListCompositionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listCompositionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listCompositionHook - List of all Recording CompositionHook resources.
  **/
  listCompositionHook(
    req: operations.ListCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.ListCompositionHookServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/CompositionHooks";
    
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
        const res: operations.ListCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listCompositionHookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listRecording - List of all Track recordings.
  **/
  listRecording(
    req: operations.ListRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRecordingRequest(req);
    }
    
    let baseURL: string = operations.ListRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Recordings";
    
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
        const res: operations.ListRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listRoom(
    req: operations.ListRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomRequest(req);
    }
    
    let baseURL: string = operations.ListRoomServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Rooms";
    
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
        const res: operations.ListRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listRoomResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listRoomParticipant(
    req: operations.ListRoomParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomParticipantRequest(req);
    }
    
    let baseURL: string = operations.ListRoomParticipantServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants", req.pathParams);
    
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
        const res: operations.ListRoomParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listRoomParticipantResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listRoomParticipantPublishedTrack - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
  **/
  listRoomParticipantPublishedTrack(
    req: operations.ListRoomParticipantPublishedTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomParticipantPublishedTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomParticipantPublishedTrackRequest(req);
    }
    
    let baseURL: string = operations.ListRoomParticipantPublishedTrackServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks", req.pathParams);
    
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
        const res: operations.ListRoomParticipantPublishedTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listRoomParticipantPublishedTrackResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listRoomParticipantSubscribedTrack - Returns a list of tracks that are subscribed for the participant.
  **/
  listRoomParticipantSubscribedTrack(
    req: operations.ListRoomParticipantSubscribedTrackRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomParticipantSubscribedTrackResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomParticipantSubscribedTrackRequest(req);
    }
    
    let baseURL: string = operations.ListRoomParticipantSubscribedTrackServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks", req.pathParams);
    
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
        const res: operations.ListRoomParticipantSubscribedTrackResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listRoomParticipantSubscribedTrackResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listRoomRecording(
    req: operations.ListRoomRecordingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoomRecordingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoomRecordingRequest(req);
    }
    
    let baseURL: string = operations.ListRoomRecordingServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Recordings", req.pathParams);
    
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
        const res: operations.ListRoomRecordingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listRoomRecordingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateCompositionHook(
    req: operations.UpdateCompositionHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCompositionHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCompositionHookRequest(req);
    }
    
    let baseURL: string = operations.UpdateCompositionHookServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/CompositionHooks/{Sid}", req.pathParams);

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
        const res: operations.UpdateCompositionHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1CompositionHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateRoom(
    req: operations.UpdateRoomRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomRequest(req);
    }
    
    let baseURL: string = operations.UpdateRoomServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{Sid}", req.pathParams);

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
        const res: operations.UpdateRoomResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1Room = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateRoomParticipant(
    req: operations.UpdateRoomParticipantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomParticipantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomParticipantRequest(req);
    }
    
    let baseURL: string = operations.UpdateRoomParticipantServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{Sid}", req.pathParams);

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
        const res: operations.UpdateRoomParticipantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipant = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateRoomParticipantAnonymize(
    req: operations.UpdateRoomParticipantAnonymizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomParticipantAnonymizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomParticipantAnonymizeRequest(req);
    }
    
    let baseURL: string = operations.UpdateRoomParticipantAnonymizeServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateRoomParticipantAnonymizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantAnonymize = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateRoomParticipantSubscribeRule - Update the Subscribe Rules for the Participant
  **/
  updateRoomParticipantSubscribeRule(
    req: operations.UpdateRoomParticipantSubscribeRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomParticipantSubscribeRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomParticipantSubscribeRuleRequest(req);
    }
    
    let baseURL: string = operations.UpdateRoomParticipantSubscribeRuleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", req.pathParams);

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
        const res: operations.UpdateRoomParticipantSubscribeRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomParticipantRoomParticipantSubscribeRule = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateRoomRecordingRule - Update the Recording Rules for the Room
  **/
  updateRoomRecordingRule(
    req: operations.UpdateRoomRecordingRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoomRecordingRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoomRecordingRuleRequest(req);
    }
    
    let baseURL: string = operations.UpdateRoomRecordingRuleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Rooms/{RoomSid}/RecordingRules", req.pathParams);

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
        const res: operations.UpdateRoomRecordingRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.videoV1RoomRoomRecordingRule = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}