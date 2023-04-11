import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerSegments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ListCustomerSegments
     *
     * @remarks
     * Retrieves the list of customer segments of a business.
     */
    listCustomerSegments(req: operations.ListCustomerSegmentsRequest, security: operations.ListCustomerSegmentsSecurity, config?: AxiosRequestConfig): Promise<operations.ListCustomerSegmentsResponse>;
    /**
     * RetrieveCustomerSegment
     *
     * @remarks
     * Retrieves a specific customer segment as identified by the `segment_id` value.
     */
    retrieveCustomerSegment(req: operations.RetrieveCustomerSegmentRequest, security: operations.RetrieveCustomerSegmentSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveCustomerSegmentResponse>;
}
