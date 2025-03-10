/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Projects {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * CreateBroker creates a Broker.
   */
  servicebrokerProjectsBrokersCreate(
    req: operations.ServicebrokerProjectsBrokersCreateRequest,
    security: operations.ServicebrokerProjectsBrokersCreateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersCreateRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1beta1/{parent}/brokers",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "googleCloudServicebrokerV1beta1Broker",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ServicebrokerProjectsBrokersCreateSecurity(
        security
      );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersCreateResponse =
        new operations.ServicebrokerProjectsBrokersCreateResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists all the bindings in the instance.
   */
  servicebrokerProjectsBrokersInstancesBindingsList(
    req: operations.ServicebrokerProjectsBrokersInstancesBindingsListRequest,
    security: operations.ServicebrokerProjectsBrokersInstancesBindingsListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.ServicebrokerProjectsBrokersInstancesBindingsListRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1beta1/{parent}/bindings",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersInstancesBindingsListSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse =
        new operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists all the instances in the brokers
   * This API is an extension and not part of the OSB spec.
   * Hence the path is a standard Google API URL.
   */
  servicebrokerProjectsBrokersInstancesList(
    req: operations.ServicebrokerProjectsBrokersInstancesListRequest,
    security: operations.ServicebrokerProjectsBrokersInstancesListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersInstancesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersInstancesListRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1beta1/{parent}/instances",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersInstancesListSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersInstancesListResponse =
        new operations.ServicebrokerProjectsBrokersInstancesListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * ListBrokers lists brokers.
   */
  servicebrokerProjectsBrokersList(
    req: operations.ServicebrokerProjectsBrokersListRequest,
    security: operations.ServicebrokerProjectsBrokersListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersListRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1beta1/{parent}/brokers",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.ServicebrokerProjectsBrokersListSecurity(
        security
      );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersListResponse =
        new operations.ServicebrokerProjectsBrokersListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Lists all the Services registered with this broker for consumption for
   * given service registry broker, which contains an set of services.
   * Note, that Service producer API is separate from Broker API.
   */
  servicebrokerProjectsBrokersV2CatalogList(
    req: operations.ServicebrokerProjectsBrokersV2CatalogListRequest,
    security: operations.ServicebrokerProjectsBrokersV2CatalogListSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2CatalogListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ServicebrokerProjectsBrokersV2CatalogListRequest(
        req
      );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1beta1/{parent}/v2/catalog",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersV2CatalogListSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersV2CatalogListResponse =
        new operations.ServicebrokerProjectsBrokersV2CatalogListResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Provisions a service instance.
   * If `request.accepts_incomplete` is false and Broker cannot execute request
   * synchronously HTTP 422 error will be returned along with
   * FAILED_PRECONDITION status.
   * If `request.accepts_incomplete` is true and the Broker decides to execute
   * resource asynchronously then HTTP 202 response code will be returned and a
   * valid polling operation in the response will be included.
   * If Broker executes the request synchronously and it succeeds HTTP 201
   * response will be furnished.
   * If identical instance exists, then HTTP 200 response will be returned.
   * If an instance with identical ID but mismatching parameters exists, then
   * HTTP 409 status code will be returned.
   */
  servicebrokerProjectsBrokersV2ServiceInstancesCreate(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest,
    security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1beta1/{parent}/v2/service_instances/{instance_id}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "googleCloudServicebrokerV1beta1ServiceInstance",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Updates an existing service instance.
   * See CreateServiceInstance for possible response codes.
   */
  servicebrokerProjectsBrokersV2ServiceInstancesPatch(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest,
    security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1beta1/{name}", req);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "googleCloudServicebrokerV1beta1ServiceInstance",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * CreateBinding generates a service binding to an existing service instance.
   * See ProviServiceInstance for async operation details.
   */
  servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest,
    security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1beta1/{parent}/service_bindings/{binding_id}",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "googleCloudServicebrokerV1beta1Binding",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "put",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Unbinds from a service instance.
   * For synchronous/asynchronous request details see CreateServiceInstance
   * method.
   * If binding does not exist HTTP 410 status will be returned.
   */
  servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest,
    security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1beta1/{name}", req);
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * GetBinding returns the binding information.
   */
  servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest,
    security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1beta1/{name}", req);
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }

  /**
   * Returns the state of the last operation for the binding.
   * Only last (or current) operation can be polled.
   */
  servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation(
    req: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest,
    security: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest(
          req
        );
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/v1beta1/{name}/last_operation",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity(
          security
        );
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse =
        new operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse(
          {
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
          }
        );
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `*/*`)) {
            const resBody: string = JSON.stringify(httpRes?.data, null, 0);
            const out: Uint8Array = new Uint8Array(resBody.length);
            for (let i = 0; i < resBody.length; i++)
              out[i] = resBody.charCodeAt(i);
            res.body = out;
          }
          break;
      }

      return res;
    });
  }
}
