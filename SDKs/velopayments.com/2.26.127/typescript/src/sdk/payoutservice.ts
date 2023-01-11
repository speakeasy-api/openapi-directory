import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class PayoutService {
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
   * createQuoteForPayoutV3 - Create a quote for the payout
   *
   * Create quote for a payout
  **/
  createQuoteForPayoutV3(
    req: operations.CreateQuoteForPayoutV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateQuoteForPayoutV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateQuoteForPayoutV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payouts/{payoutId}/quote", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateQuoteForPayoutV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.quoteResponseV3 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse409 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPaymentsForPayoutV3 - Retrieve payments for a payout
   *
   * Retrieve payments for a payout
  **/
  getPaymentsForPayoutV3(
    req: operations.GetPaymentsForPayoutV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentsForPayoutV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentsForPayoutV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payouts/{payoutId}/payments", req.pathParams);
    
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
        const res: operations.GetPaymentsForPayoutV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pagedPaymentsResponseV3 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPayoutSummaryV3 - Get Payout Summary
   *
   * Get payout summary - returns the current state of the payout.
  **/
  getPayoutSummaryV3(
    req: operations.GetPayoutSummaryV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPayoutSummaryV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPayoutSummaryV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payouts/{payoutId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPayoutSummaryV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.payoutSummaryResponseV3 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * instructPayoutV3 - Instruct Payout
   *
   * Instruct a payout to be made for the specified payoutId.
  **/
  instructPayoutV3(
    req: operations.InstructPayoutV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.InstructPayoutV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InstructPayoutV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payouts/{payoutId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InstructPayoutV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse409 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * submitPayoutV3 - Submit Payout
   *
   * <p>Create a new payout and return a location header with a link to get the payout.</p>
   * <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously.</p>
   * <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header.</p>
   * <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc.</p>
   *  with no decimal places.
   * 
  **/
  submitPayoutV3(
    req: operations.SubmitPayoutV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.SubmitPayoutV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubmitPayoutV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/payouts";

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
        const res: operations.SubmitPayoutV3Response = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * withdrawPayment - Withdraw a Payment
   *
   * <p>withdraw a payment </p>
   * <p>There are a variety of reasons why this can fail</p>
   * <ul>
   *     <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
   *     <li>the payout must not be in a state of 'instructed'</li>
   * </ul>
   * 
  **/
  withdrawPayment(
    req: operations.WithdrawPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WithdrawPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WithdrawPaymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/payments/{paymentId}/withdraw", req.pathParams);

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
        const res: operations.WithdrawPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * withdrawPayoutV3 - Withdraw Payout
   *
   * Withdraw Payout will delete payout details from payout service and rails services but will just move the status of the payout to WITHDRAWN in payment audit.
  **/
  withdrawPayoutV3(
    req: operations.WithdrawPayoutV3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.WithdrawPayoutV3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WithdrawPayoutV3Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/payouts/{payoutId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.WithdrawPayoutV3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse400 = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse401 = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse403 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.inlineResponse404 = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
