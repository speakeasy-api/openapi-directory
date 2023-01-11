import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Webhooks {
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
   * deleteWebhooksId - Delete webhook
   *
   * Delete a specific webhook by providing its unique identifier. Once
   * deleted, webhook events will no longer be sent to the configured URL.
   * 
  **/
  deleteWebhooksId(
    req: operations.DeleteWebhooksIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhooksIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhooksIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhooks/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWebhooksIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * getWebhooks - List webhooks
   *
   * Retrieve a list of configured webhooks. The returned list is
   * [paginated](#pagination) and can be scrolled by following the `next`
   * and `prev` links where present. Results are ordered oldest first to
   * newest last.
   * 
  **/
  getWebhooks(
    req: operations.GetWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks";
    
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
        const res: operations.GetWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listWebhooksResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWebhooksId - Retrieve webhook
   *
   * Retrieve a specific webhook by providing its unique identifier.
   * 
  **/
  getWebhooksId(
    req: operations.GetWebhooksIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhooks/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhooksIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getWebhookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWebhooksWebhookIdLogs - List webhook logs
   *
   * Retrieve a list of delivery logs for a webhook by providing its unique
   * identifier. This is useful for analysis and debugging purposes. The
   * returned list is [paginated](#pagination) and can be scrolled by
   * following the `next` and `prev` links where present. Results are ordered
   * newest first to oldest last. Logs may be automatically purged after a
   * period of time.
   * 
  **/
  getWebhooksWebhookIdLogs(
    req: operations.GetWebhooksWebhookIdLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhooksWebhookIdLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhooksWebhookIdLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhooks/{webhookId}/logs", req.pathParams);
    
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
        const res: operations.GetWebhooksWebhookIdLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listWebhookDeliveryLogsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postWebhooks - Create webhook
   *
   * Create a new webhook with a given URL. The URL will receive webhook
   * events as JSON-encoded `POST` requests. The URL must respond with a HTTP
   * `200` status on success.
   * 
   * There is currently a limit of 10 webhooks at any given time. Once this
   * limit is reached, existing webhooks will need to be deleted before new
   * webhooks can be created.
   * 
   * Event delivery is retried with exponential backoff if the URL is
   * unreachable or it does not respond with a `200` status. The response
   * includes a `secretKey` attribute, which is used to sign requests sent to
   * the webhook URL. It will not be returned from any other endpoints within
   * the Up API. If the `secretKey` is lost, simply create a new webhook with
   * the same URL, capture its `secretKey` and then delete the original
   * webhook. See [Handling webhook events](#callback_post_webhookURL) for
   * details on how to process webhook events.
   * 
   * It is probably a good idea to test the webhook by
   * [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
   * it.
   * 
  **/
  postWebhooks(
    req: operations.PostWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks";

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
        const res: operations.PostWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createWebhookResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postWebhooksWebhookIdPing - Ping webhook
   *
   * Send a `PING` event to a webhook by providing its unique identifier.
   * This is useful for testing and debugging purposes. The event is delivered
   * asynchronously and its data is returned in the response to this request.
   * 
  **/
  postWebhooksWebhookIdPing(
    req: operations.PostWebhooksWebhookIdPingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksWebhookIdPingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksWebhookIdPingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/webhooks/{webhookId}/ping", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostWebhooksWebhookIdPingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookEventCallback = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
