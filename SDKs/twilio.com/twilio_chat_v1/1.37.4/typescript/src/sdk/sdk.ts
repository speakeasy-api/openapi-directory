import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";




export const ServerList = [
	"https://chat.twilio.com",
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
  
  createChannel(
    req: operations.CreateChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateChannelRequest(req);
    }
    
    let baseURL: string = operations.CreateChannelServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels", req.pathParams);

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
        const res: operations.CreateChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createCredential(
    req: operations.CreateCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCredentialRequest(req);
    }
    
    let baseURL: string = operations.CreateCredentialServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials";

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
        const res: operations.CreateCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1Credential = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createInvite(
    req: operations.CreateInviteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateInviteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateInviteRequest(req);
    }
    
    let baseURL: string = operations.CreateInviteServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites", req.pathParams);

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
        const res: operations.CreateInviteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannelInvite = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createMember(
    req: operations.CreateMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMemberRequest(req);
    }
    
    let baseURL: string = operations.CreateMemberServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members", req.pathParams);

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
        const res: operations.CreateMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannelMember = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createMessage(
    req: operations.CreateMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateMessageRequest(req);
    }
    
    let baseURL: string = operations.CreateMessageServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages", req.pathParams);

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
        const res: operations.CreateMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannelMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createRole(
    req: operations.CreateRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateRoleRequest(req);
    }
    
    let baseURL: string = operations.CreateRoleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Roles", req.pathParams);

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
        const res: operations.CreateRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceRole = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createService(
    req: operations.CreateServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateServiceRequest(req);
    }
    
    let baseURL: string = operations.CreateServiceServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Services";

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
        const res: operations.CreateServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  createUser(
    req: operations.CreateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUserRequest(req);
    }
    
    let baseURL: string = operations.CreateUserServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Users", req.pathParams);

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
        const res: operations.CreateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  deleteChannel(
    req: operations.DeleteChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteChannelRequest(req);
    }
    
    let baseURL: string = operations.DeleteChannelServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  deleteCredential(
    req: operations.DeleteCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteCredentialRequest(req);
    }
    
    let baseURL: string = operations.DeleteCredentialServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Credentials/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  deleteInvite(
    req: operations.DeleteInviteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteInviteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteInviteRequest(req);
    }
    
    let baseURL: string = operations.DeleteInviteServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteInviteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  deleteMember(
    req: operations.DeleteMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMemberRequest(req);
    }
    
    let baseURL: string = operations.DeleteMemberServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  deleteMessage(
    req: operations.DeleteMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessageRequest(req);
    }
    
    let baseURL: string = operations.DeleteMessageServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  deleteRole(
    req: operations.DeleteRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRoleRequest(req);
    }
    
    let baseURL: string = operations.DeleteRoleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Roles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  deleteService(
    req: operations.DeleteServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteServiceRequest(req);
    }
    
    let baseURL: string = operations.DeleteServiceServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  deleteUser(
    req: operations.DeleteUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUserRequest(req);
    }
    
    let baseURL: string = operations.DeleteUserServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Users/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  fetchChannel(
    req: operations.FetchChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchChannelRequest(req);
    }
    
    let baseURL: string = operations.FetchChannelServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchCredential(
    req: operations.FetchCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCredentialRequest(req);
    }
    
    let baseURL: string = operations.FetchCredentialServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Credentials/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1Credential = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchInvite(
    req: operations.FetchInviteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchInviteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchInviteRequest(req);
    }
    
    let baseURL: string = operations.FetchInviteServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchInviteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannelInvite = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchMember(
    req: operations.FetchMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMemberRequest(req);
    }
    
    let baseURL: string = operations.FetchMemberServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannelMember = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchMessage(
    req: operations.FetchMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchMessageRequest(req);
    }
    
    let baseURL: string = operations.FetchMessageServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannelMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchRole(
    req: operations.FetchRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchRoleRequest(req);
    }
    
    let baseURL: string = operations.FetchRoleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Roles/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceRole = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchService(
    req: operations.FetchServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchServiceRequest(req);
    }
    
    let baseURL: string = operations.FetchServiceServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  fetchUser(
    req: operations.FetchUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUserRequest(req);
    }
    
    let baseURL: string = operations.FetchUserServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Users/{Sid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listChannel(
    req: operations.ListChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListChannelRequest(req);
    }
    
    let baseURL: string = operations.ListChannelServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels", req.pathParams);
    
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
        const res: operations.ListChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listChannelResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listCredential(
    req: operations.ListCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListCredentialRequest(req);
    }
    
    let baseURL: string = operations.ListCredentialServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Credentials";
    
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
        const res: operations.ListCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listCredentialResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listInvite(
    req: operations.ListInviteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListInviteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListInviteRequest(req);
    }
    
    let baseURL: string = operations.ListInviteServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites", req.pathParams);
    
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
        const res: operations.ListInviteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listInviteResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listMember(
    req: operations.ListMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMemberRequest(req);
    }
    
    let baseURL: string = operations.ListMemberServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members", req.pathParams);
    
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
        const res: operations.ListMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listMemberResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listMessage(
    req: operations.ListMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListMessageRequest(req);
    }
    
    let baseURL: string = operations.ListMessageServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages", req.pathParams);
    
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
        const res: operations.ListMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listMessageResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listRole(
    req: operations.ListRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListRoleRequest(req);
    }
    
    let baseURL: string = operations.ListRoleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Roles", req.pathParams);
    
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
        const res: operations.ListRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listRoleResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listService(
    req: operations.ListServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListServiceRequest(req);
    }
    
    let baseURL: string = operations.ListServiceServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = baseURL.replace(/\/$/, "") + "/v1/Services";
    
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
        const res: operations.ListServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listServiceResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  listUser(
    req: operations.ListUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUserRequest(req);
    }
    
    let baseURL: string = operations.ListUserServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Users", req.pathParams);
    
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
        const res: operations.ListUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listUserResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listUserChannel - List all Channels for a given User.
  **/
  listUserChannel(
    req: operations.ListUserChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUserChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUserChannelRequest(req);
    }
    
    let baseURL: string = operations.ListUserChannelServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Users/{UserSid}/Channels", req.pathParams);
    
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
        const res: operations.ListUserChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listUserChannelResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateChannel(
    req: operations.UpdateChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateChannelRequest(req);
    }
    
    let baseURL: string = operations.UpdateChannelServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{Sid}", req.pathParams);

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
        const res: operations.UpdateChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannel = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateCredential(
    req: operations.UpdateCredentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateCredentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateCredentialRequest(req);
    }
    
    let baseURL: string = operations.UpdateCredentialServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Credentials/{Sid}", req.pathParams);

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
        const res: operations.UpdateCredentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1Credential = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateMember(
    req: operations.UpdateMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMemberRequest(req);
    }
    
    let baseURL: string = operations.UpdateMemberServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", req.pathParams);

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
        const res: operations.UpdateMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannelMember = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateMessage(
    req: operations.UpdateMessageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateMessageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateMessageRequest(req);
    }
    
    let baseURL: string = operations.UpdateMessageServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", req.pathParams);

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
        const res: operations.UpdateMessageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceChannelMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateRole(
    req: operations.UpdateRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateRoleRequest(req);
    }
    
    let baseURL: string = operations.UpdateRoleServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Roles/{Sid}", req.pathParams);

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
        const res: operations.UpdateRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceRole = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateService(
    req: operations.UpdateServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateServiceRequest(req);
    }
    
    let baseURL: string = operations.UpdateServiceServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{Sid}", req.pathParams);

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
        const res: operations.UpdateServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1Service = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  updateUser(
    req: operations.UpdateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserRequest(req);
    }
    
    let baseURL: string = operations.UpdateUserServerList[0];
    if (req.serverURL) {
      baseURL = req.serverURL;
    }
    const url: string = utils.generateURL(baseURL, "/v1/Services/{ServiceSid}/Users/{Sid}", req.pathParams);

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
        const res: operations.UpdateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chatV1ServiceUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}