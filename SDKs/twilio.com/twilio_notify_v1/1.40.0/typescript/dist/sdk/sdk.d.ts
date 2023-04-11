import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://notify.twilio.com"];
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
    createBinding(req: operations.CreateBindingRequest, security: operations.CreateBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateBindingResponse>;
    createCredential(req: operations.CreateCredentialCreateCredentialRequest, security: operations.CreateCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCredentialResponse>;
    createNotification(req: operations.CreateNotificationRequest, security: operations.CreateNotificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateNotificationResponse>;
    createService(req: operations.CreateServiceCreateServiceRequest, security: operations.CreateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    deleteBinding(req: operations.DeleteBindingRequest, security: operations.DeleteBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteBindingResponse>;
    deleteCredential(req: operations.DeleteCredentialRequest, security: operations.DeleteCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialResponse>;
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    fetchBinding(req: operations.FetchBindingRequest, security: operations.FetchBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBindingResponse>;
    fetchCredential(req: operations.FetchCredentialRequest, security: operations.FetchCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCredentialResponse>;
    fetchService(req: operations.FetchServiceRequest, security: operations.FetchServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    listBinding(req: operations.ListBindingRequest, security: operations.ListBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBindingResponse>;
    listCredential(req: operations.ListCredentialRequest, security: operations.ListCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCredentialResponse>;
    listService(req: operations.ListServiceRequest, security: operations.ListServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    updateCredential(req: operations.UpdateCredentialRequest, security: operations.UpdateCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialResponse>;
    updateService(req: operations.UpdateServiceRequest, security: operations.UpdateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
}
