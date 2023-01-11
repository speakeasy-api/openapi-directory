import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Pulses {
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
   * getOfferingsOfferingIdAnalyticsPulses - Find all pulse IDs in the specified offering
   *
   * Responds with the IDs of all pulses that learners have responded to in a specified offering.
  **/
  getOfferingsOfferingIdAnalyticsPulses(
    req: operations.GetOfferingsOfferingIdAnalyticsPulsesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAnalyticsPulsesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAnalyticsPulsesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/analytics/pulses", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAnalyticsPulsesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getOfferingsOfferingIdAnalyticsPulses200ApplicationJSONStrings = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses - Find pulses by offeringId and pulseId
   *
   * Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.
  **/
  getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses(
    req: operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/analytics/pulses/{pulseId}/responses", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.pulseResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
