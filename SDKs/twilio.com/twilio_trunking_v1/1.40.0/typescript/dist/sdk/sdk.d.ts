import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://trunking.twilio.com"];
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
    createCredentialList(req: operations.CreateCredentialListRequest, security: operations.CreateCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCredentialListResponse>;
    /**
     * Associate an IP Access Control List with a Trunk
     */
    createIpAccessControlList(req: operations.CreateIpAccessControlListRequest, security: operations.CreateIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateIpAccessControlListResponse>;
    createOriginationUrl(req: operations.CreateOriginationUrlRequest, security: operations.CreateOriginationUrlSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateOriginationUrlResponse>;
    createPhoneNumber(req: operations.CreatePhoneNumberRequest, security: operations.CreatePhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreatePhoneNumberResponse>;
    createTrunk(req: operations.CreateTrunkCreateTrunkRequest, security: operations.CreateTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTrunkResponse>;
    deleteCredentialList(req: operations.DeleteCredentialListRequest, security: operations.DeleteCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialListResponse>;
    /**
     * Remove an associated IP Access Control List from a Trunk
     */
    deleteIpAccessControlList(req: operations.DeleteIpAccessControlListRequest, security: operations.DeleteIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteIpAccessControlListResponse>;
    deleteOriginationUrl(req: operations.DeleteOriginationUrlRequest, security: operations.DeleteOriginationUrlSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteOriginationUrlResponse>;
    deletePhoneNumber(req: operations.DeletePhoneNumberRequest, security: operations.DeletePhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeletePhoneNumberResponse>;
    deleteTrunk(req: operations.DeleteTrunkRequest, security: operations.DeleteTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTrunkResponse>;
    fetchCredentialList(req: operations.FetchCredentialListRequest, security: operations.FetchCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCredentialListResponse>;
    fetchIpAccessControlList(req: operations.FetchIpAccessControlListRequest, security: operations.FetchIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchIpAccessControlListResponse>;
    fetchOriginationUrl(req: operations.FetchOriginationUrlRequest, security: operations.FetchOriginationUrlSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchOriginationUrlResponse>;
    fetchPhoneNumber(req: operations.FetchPhoneNumberRequest, security: operations.FetchPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    fetchRecording(req: operations.FetchRecordingRequest, security: operations.FetchRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRecordingResponse>;
    fetchTrunk(req: operations.FetchTrunkRequest, security: operations.FetchTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTrunkResponse>;
    listCredentialList(req: operations.ListCredentialListRequest, security: operations.ListCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCredentialListResponse>;
    /**
     * List all IP Access Control Lists for a Trunk
     */
    listIpAccessControlList(req: operations.ListIpAccessControlListRequest, security: operations.ListIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIpAccessControlListResponse>;
    listOriginationUrl(req: operations.ListOriginationUrlRequest, security: operations.ListOriginationUrlSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListOriginationUrlResponse>;
    listPhoneNumber(req: operations.ListPhoneNumberRequest, security: operations.ListPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberResponse>;
    listTrunk(req: operations.ListTrunkRequest, security: operations.ListTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTrunkResponse>;
    updateOriginationUrl(req: operations.UpdateOriginationUrlRequest, security: operations.UpdateOriginationUrlSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateOriginationUrlResponse>;
    updateRecording(req: operations.UpdateRecordingRequest, security: operations.UpdateRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRecordingResponse>;
    updateTrunk(req: operations.UpdateTrunkRequest, security: operations.UpdateTrunkSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTrunkResponse>;
}
