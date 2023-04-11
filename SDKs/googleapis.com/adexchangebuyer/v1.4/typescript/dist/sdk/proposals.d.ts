import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Proposals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a proposal given its id
     */
    adexchangebuyerProposalsGet(req: operations.AdexchangebuyerProposalsGetRequest, security: operations.AdexchangebuyerProposalsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsGetResponse>;
    /**
     * Create the given list of proposals
     */
    adexchangebuyerProposalsInsert(req: operations.AdexchangebuyerProposalsInsertRequest, security: operations.AdexchangebuyerProposalsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsInsertResponse>;
    /**
     * Update the given proposal. This method supports patch semantics.
     */
    adexchangebuyerProposalsPatch(req: operations.AdexchangebuyerProposalsPatchRequest, security: operations.AdexchangebuyerProposalsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsPatchResponse>;
    /**
     * Search for proposals using pql query
     */
    adexchangebuyerProposalsSearch(req: operations.AdexchangebuyerProposalsSearchRequest, security: operations.AdexchangebuyerProposalsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsSearchResponse>;
    /**
     * Update the given proposal to indicate that setup has been completed.
     */
    adexchangebuyerProposalsSetupcomplete(req: operations.AdexchangebuyerProposalsSetupcompleteRequest, security: operations.AdexchangebuyerProposalsSetupcompleteSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsSetupcompleteResponse>;
    /**
     * Update the given proposal
     */
    adexchangebuyerProposalsUpdate(req: operations.AdexchangebuyerProposalsUpdateRequest, security: operations.AdexchangebuyerProposalsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProposalsUpdateResponse>;
}
