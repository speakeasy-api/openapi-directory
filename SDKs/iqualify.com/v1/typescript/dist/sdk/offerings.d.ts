import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Offerings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find current, past and future offerings
     *
     * @remarks
     * Responds with all offerings for your organisation.
     */
    getOfferings(config?: AxiosRequestConfig): Promise<operations.GetOfferingsResponse>;
    /**
     * Find active offerings
     *
     * @remarks
     * Responds with active offerings for your organisation.
     */
    getOfferingsCurrent(config?: AxiosRequestConfig): Promise<operations.GetOfferingsCurrentResponse>;
    /**
     * Find scheduled offerings
     *
     * @remarks
     * Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).
     */
    getOfferingsFuture(config?: AxiosRequestConfig): Promise<operations.GetOfferingsFutureResponse>;
    /**
     * Find offerings where info field matches the specified textPattern
     *
     * @remarks
     * Find offerings where info field matches the specified text pattern.
     */
    getOfferingsInfoTextPattern(req: operations.GetOfferingsInfoTextPatternRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsInfoTextPatternResponse>;
    /**
     * Find past offerings
     *
     * @remarks
     * Responds with past offerings for your organisation.
     */
    getOfferingsPast(config?: AxiosRequestConfig): Promise<operations.GetOfferingsPastResponse>;
    /**
     * Find offering by ID
     *
     * @remarks
     * Responds with an offering matching the offeringId.
     */
    getOfferingsOfferingId(req: operations.GetOfferingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdResponse>;
    /**
     * Update offering
     *
     * @remarks
     * Updates the offering.
     */
    patchOfferingsOfferingId(req: operations.PatchOfferingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdResponse>;
    /**
     * Create offering
     *
     * @remarks
     * Creates a new offering.
     */
    postOfferings(req: shared.OfferingRequired, config?: AxiosRequestConfig): Promise<operations.PostOfferingsResponse>;
}
