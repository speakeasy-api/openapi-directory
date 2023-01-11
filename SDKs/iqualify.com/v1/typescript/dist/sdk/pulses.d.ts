import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pulses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOfferingsOfferingIdAnalyticsPulses - Find all pulse IDs in the specified offering
     *
     * Responds with the IDs of all pulses that learners have responded to in a specified offering.
    **/
    getOfferingsOfferingIdAnalyticsPulses(req: operations.GetOfferingsOfferingIdAnalyticsPulsesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsPulsesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses - Find pulses by offeringId and pulseId
     *
     * Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses(req: operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse>;
}
