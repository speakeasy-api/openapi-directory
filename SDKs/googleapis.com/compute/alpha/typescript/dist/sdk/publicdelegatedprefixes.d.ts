import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PublicDelegatedPrefixes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all PublicDelegatedPrefix resources owned by the specific project across all scopes.
     */
    computePublicDelegatedPrefixesAggregatedList(req: operations.ComputePublicDelegatedPrefixesAggregatedListRequest, security: operations.ComputePublicDelegatedPrefixesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicDelegatedPrefixesAggregatedListResponse>;
    /**
     * Announces the specified PublicDelegatedPrefix in the given region.
     */
    computePublicDelegatedPrefixesAnnounce(req: operations.ComputePublicDelegatedPrefixesAnnounceRequest, security: operations.ComputePublicDelegatedPrefixesAnnounceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicDelegatedPrefixesAnnounceResponse>;
    /**
     * Deletes the specified PublicDelegatedPrefix in the given region.
     */
    computePublicDelegatedPrefixesDelete(req: operations.ComputePublicDelegatedPrefixesDeleteRequest, security: operations.ComputePublicDelegatedPrefixesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicDelegatedPrefixesDeleteResponse>;
    /**
     * Returns the specified PublicDelegatedPrefix resource in the given region.
     */
    computePublicDelegatedPrefixesGet(req: operations.ComputePublicDelegatedPrefixesGetRequest, security: operations.ComputePublicDelegatedPrefixesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicDelegatedPrefixesGetResponse>;
    /**
     * Creates a PublicDelegatedPrefix in the specified project in the given region using the parameters that are included in the request.
     */
    computePublicDelegatedPrefixesInsert(req: operations.ComputePublicDelegatedPrefixesInsertRequest, security: operations.ComputePublicDelegatedPrefixesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicDelegatedPrefixesInsertResponse>;
    /**
     * Lists the PublicDelegatedPrefixes for a project in the given region.
     */
    computePublicDelegatedPrefixesList(req: operations.ComputePublicDelegatedPrefixesListRequest, security: operations.ComputePublicDelegatedPrefixesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicDelegatedPrefixesListResponse>;
    /**
     * Patches the specified PublicDelegatedPrefix resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computePublicDelegatedPrefixesPatch(req: operations.ComputePublicDelegatedPrefixesPatchRequest, security: operations.ComputePublicDelegatedPrefixesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicDelegatedPrefixesPatchResponse>;
    /**
     * Withdraws the specified PublicDelegatedPrefix in the given region.
     */
    computePublicDelegatedPrefixesWithdraw(req: operations.ComputePublicDelegatedPrefixesWithdrawRequest, security: operations.ComputePublicDelegatedPrefixesWithdrawSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicDelegatedPrefixesWithdrawResponse>;
}
