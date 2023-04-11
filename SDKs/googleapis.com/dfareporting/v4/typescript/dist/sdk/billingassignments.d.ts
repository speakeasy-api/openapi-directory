import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BillingAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
     */
    dfareportingBillingAssignmentsInsert(req: operations.DfareportingBillingAssignmentsInsertRequest, security: operations.DfareportingBillingAssignmentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingAssignmentsInsertResponse>;
    /**
     * Retrieves a list of billing assignments.
     */
    dfareportingBillingAssignmentsList(req: operations.DfareportingBillingAssignmentsListRequest, security: operations.DfareportingBillingAssignmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingAssignmentsListResponse>;
}
