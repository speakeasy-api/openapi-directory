import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Offerings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOfferings - Find current, past and future offerings
     *
     * Responds with all offerings for your organisation.
    **/
    getOfferings(config?: AxiosRequestConfig): Promise<operations.GetOfferingsResponse>;
    /**
     * getOfferingsCurrent - Find active offerings
     *
     * Responds with active offerings for your organisation.
    **/
    getOfferingsCurrent(config?: AxiosRequestConfig): Promise<operations.GetOfferingsCurrentResponse>;
    /**
     * getOfferingsFuture - Find scheduled offerings
     *
     * Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).
    **/
    getOfferingsFuture(config?: AxiosRequestConfig): Promise<operations.GetOfferingsFutureResponse>;
    /**
     * getOfferingsInfoTextPattern - Find offerings where info field matches the specified textPattern
     *
     * Find offerings where info field matches the specified text pattern.
    **/
    getOfferingsInfoTextPattern(req: operations.GetOfferingsInfoTextPatternRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsInfoTextPatternResponse>;
    /**
     * getOfferingsPast - Find past offerings
     *
     * Responds with past offerings for your organisation.
    **/
    getOfferingsPast(config?: AxiosRequestConfig): Promise<operations.GetOfferingsPastResponse>;
    /**
     * getOfferingsOfferingId - Find offering by ID
     *
     * Responds with an offering matching the offeringId.
    **/
    getOfferingsOfferingId(req: operations.GetOfferingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdResponse>;
    /**
     * patchOfferingsOfferingId - Update offering
     *
     * Updates the offering.
    **/
    patchOfferingsOfferingId(req: operations.PatchOfferingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdResponse>;
    /**
     * postOfferings - Create offering
     *
     * Creates a new offering.
    **/
    postOfferings(req: operations.PostOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsResponse>;
}
