import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://fax.twilio.com"];
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
    /**
     * Delete a specific fax and its associated media.
     */
    deleteFax(req: operations.DeleteFaxRequest, security: operations.DeleteFaxSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFaxResponse>;
    /**
     * Delete a specific fax media instance.
     */
    deleteFaxMedia(req: operations.DeleteFaxMediaRequest, security: operations.DeleteFaxMediaSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFaxMediaResponse>;
    /**
     * Fetch a specific fax.
     */
    fetchFax(req: operations.FetchFaxRequest, security: operations.FetchFaxSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFaxResponse>;
    /**
     * Fetch a specific fax media instance.
     */
    fetchFaxMedia(req: operations.FetchFaxMediaRequest, security: operations.FetchFaxMediaSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFaxMediaResponse>;
    /**
     * Retrieve a list of all faxes.
     */
    listFax(req: operations.ListFaxRequest, security: operations.ListFaxSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFaxResponse>;
    /**
     * Retrieve a list of all fax media instances for the specified fax.
     */
    listFaxMedia(req: operations.ListFaxMediaRequest, security: operations.ListFaxMediaSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFaxMediaResponse>;
}
