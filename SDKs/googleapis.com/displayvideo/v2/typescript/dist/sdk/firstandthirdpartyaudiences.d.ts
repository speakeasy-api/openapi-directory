import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FirstAndThirdPartyAudiences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
     */
    displayvideoFirstAndThirdPartyAudiencesCreate(req: operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest, security: operations.DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse>;
    /**
     * Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
     */
    displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers(req: operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest, security: operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse>;
    /**
     * Gets a first and third party audience.
     */
    displayvideoFirstAndThirdPartyAudiencesGet(req: operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest, security: operations.DisplayvideoFirstAndThirdPartyAudiencesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse>;
    /**
     * Lists first and third party audiences. The order is defined by the order_by parameter.
     */
    displayvideoFirstAndThirdPartyAudiencesList(req: operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest, security: operations.DisplayvideoFirstAndThirdPartyAudiencesListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse>;
    /**
     * Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
     */
    displayvideoFirstAndThirdPartyAudiencesPatch(req: operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest, security: operations.DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse>;
}
