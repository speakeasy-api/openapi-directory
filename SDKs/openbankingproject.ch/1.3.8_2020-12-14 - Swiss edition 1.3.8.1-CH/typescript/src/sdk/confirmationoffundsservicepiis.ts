import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ConfirmationOfFundsServicePiis {
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
   * checkAvailabilityOfFunds - Confirmation of funds request
   *
   * Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
   * If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.
  **/
  checkAvailabilityOfFunds(
    req: operations.CheckAvailabilityOfFundsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckAvailabilityOfFundsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckAvailabilityOfFundsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/funds-confirmations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CheckAvailabilityOfFundsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.checkAvailabilityOfFunds200ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error400NGAIS = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/problem+json`)) {
                res.error400AIS = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error401NGPIIS = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/problem+json`)) {
                res.error401PIIS = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error403NGPIIS = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/problem+json`)) {
                res.error403PIIS = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error404NGPIIS = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/problem+json`)) {
                res.error404PIIS = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error405NGPIIS = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/problem+json`)) {
                res.error405PIIS = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error409NGPIIS = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/problem+json`)) {
                res.error409PIIS = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
  }

}
