import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PublicAdvertisedPrefixes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified PublicAdvertisedPrefix
     */
    computePublicAdvertisedPrefixesDelete(req: operations.ComputePublicAdvertisedPrefixesDeleteRequest, security: operations.ComputePublicAdvertisedPrefixesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicAdvertisedPrefixesDeleteResponse>;
    /**
     * Returns the specified PublicAdvertisedPrefix resource.
     */
    computePublicAdvertisedPrefixesGet(req: operations.ComputePublicAdvertisedPrefixesGetRequest, security: operations.ComputePublicAdvertisedPrefixesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicAdvertisedPrefixesGetResponse>;
    /**
     * Creates a PublicAdvertisedPrefix in the specified project using the parameters that are included in the request.
     */
    computePublicAdvertisedPrefixesInsert(req: operations.ComputePublicAdvertisedPrefixesInsertRequest, security: operations.ComputePublicAdvertisedPrefixesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicAdvertisedPrefixesInsertResponse>;
    /**
     * Lists the PublicAdvertisedPrefixes for a project.
     */
    computePublicAdvertisedPrefixesList(req: operations.ComputePublicAdvertisedPrefixesListRequest, security: operations.ComputePublicAdvertisedPrefixesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicAdvertisedPrefixesListResponse>;
    /**
     * Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computePublicAdvertisedPrefixesPatch(req: operations.ComputePublicAdvertisedPrefixesPatchRequest, security: operations.ComputePublicAdvertisedPrefixesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePublicAdvertisedPrefixesPatchResponse>;
}
