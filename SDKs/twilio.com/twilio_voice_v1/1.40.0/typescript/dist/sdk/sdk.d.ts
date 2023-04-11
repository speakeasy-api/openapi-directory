import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://voice.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    createByocTrunk(req: operations.CreateByocTrunkCreateByocTrunkRequest, security: operations.CreateByocTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateByocTrunkResponse>;
    createConnectionPolicy(req: operations.CreateConnectionPolicyCreateConnectionPolicyRequest, security: operations.CreateConnectionPolicySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateConnectionPolicyResponse>;
    createConnectionPolicyTarget(req: operations.CreateConnectionPolicyTargetRequest, security: operations.CreateConnectionPolicyTargetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateConnectionPolicyTargetResponse>;
    /**
     * Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    createDialingPermissionsCountryBulkUpdate(req: operations.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest, security: operations.CreateDialingPermissionsCountryBulkUpdateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDialingPermissionsCountryBulkUpdateResponse>;
    createIpRecord(req: operations.CreateIpRecordCreateIpRecordRequest, security: operations.CreateIpRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateIpRecordResponse>;
    createSourceIpMapping(req: operations.CreateSourceIpMappingCreateSourceIpMappingRequest, security: operations.CreateSourceIpMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSourceIpMappingResponse>;
    /**
     * Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
     */
    deleteArchivedCall(req: operations.DeleteArchivedCallRequest, security: operations.DeleteArchivedCallSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteArchivedCallResponse>;
    deleteByocTrunk(req: operations.DeleteByocTrunkRequest, security: operations.DeleteByocTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteByocTrunkResponse>;
    deleteConnectionPolicy(req: operations.DeleteConnectionPolicyRequest, security: operations.DeleteConnectionPolicySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionPolicyResponse>;
    deleteConnectionPolicyTarget(req: operations.DeleteConnectionPolicyTargetRequest, security: operations.DeleteConnectionPolicyTargetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionPolicyTargetResponse>;
    deleteIpRecord(req: operations.DeleteIpRecordRequest, security: operations.DeleteIpRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteIpRecordResponse>;
    deleteSourceIpMapping(req: operations.DeleteSourceIpMappingRequest, security: operations.DeleteSourceIpMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSourceIpMappingResponse>;
    fetchByocTrunk(req: operations.FetchByocTrunkRequest, security: operations.FetchByocTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchByocTrunkResponse>;
    fetchConnectionPolicy(req: operations.FetchConnectionPolicyRequest, security: operations.FetchConnectionPolicySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConnectionPolicyResponse>;
    fetchConnectionPolicyTarget(req: operations.FetchConnectionPolicyTargetRequest, security: operations.FetchConnectionPolicyTargetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConnectionPolicyTargetResponse>;
    /**
     * Retrieve voice dialing country permissions identified by the given ISO country code
     */
    fetchDialingPermissionsCountry(req: operations.FetchDialingPermissionsCountryRequest, security: operations.FetchDialingPermissionsCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDialingPermissionsCountryResponse>;
    /**
     * Retrieve voice dialing permissions inheritance for the sub-account
     */
    fetchDialingPermissionsSettings(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDialingPermissionsSettingsResponse>;
    fetchIpRecord(req: operations.FetchIpRecordRequest, security: operations.FetchIpRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchIpRecordResponse>;
    fetchSourceIpMapping(req: operations.FetchSourceIpMappingRequest, security: operations.FetchSourceIpMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSourceIpMappingResponse>;
    listByocTrunk(req: operations.ListByocTrunkRequest, security: operations.ListByocTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListByocTrunkResponse>;
    listConnectionPolicy(req: operations.ListConnectionPolicyRequest, security: operations.ListConnectionPolicySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConnectionPolicyResponse>;
    listConnectionPolicyTarget(req: operations.ListConnectionPolicyTargetRequest, security: operations.ListConnectionPolicyTargetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConnectionPolicyTargetResponse>;
    /**
     * Retrieve all voice dialing country permissions for this account
     */
    listDialingPermissionsCountry(req: operations.ListDialingPermissionsCountryRequest, security: operations.ListDialingPermissionsCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDialingPermissionsCountryResponse>;
    /**
     * Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    listDialingPermissionsHrsPrefixes(req: operations.ListDialingPermissionsHrsPrefixesRequest, security: operations.ListDialingPermissionsHrsPrefixesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDialingPermissionsHrsPrefixesResponse>;
    listIpRecord(req: operations.ListIpRecordRequest, security: operations.ListIpRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIpRecordResponse>;
    listSourceIpMapping(req: operations.ListSourceIpMappingRequest, security: operations.ListSourceIpMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSourceIpMappingResponse>;
    updateByocTrunk(req: operations.UpdateByocTrunkRequest, security: operations.UpdateByocTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateByocTrunkResponse>;
    updateConnectionPolicy(req: operations.UpdateConnectionPolicyRequest, security: operations.UpdateConnectionPolicySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionPolicyResponse>;
    updateConnectionPolicyTarget(req: operations.UpdateConnectionPolicyTargetRequest, security: operations.UpdateConnectionPolicyTargetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionPolicyTargetResponse>;
    /**
     * Update voice dialing permissions inheritance for the sub-account
     */
    updateDialingPermissionsSettings(req: operations.UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest, security: operations.UpdateDialingPermissionsSettingsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDialingPermissionsSettingsResponse>;
    updateIpRecord(req: operations.UpdateIpRecordRequest, security: operations.UpdateIpRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateIpRecordResponse>;
    updateSourceIpMapping(req: operations.UpdateSourceIpMappingRequest, security: operations.UpdateSourceIpMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSourceIpMappingResponse>;
}
