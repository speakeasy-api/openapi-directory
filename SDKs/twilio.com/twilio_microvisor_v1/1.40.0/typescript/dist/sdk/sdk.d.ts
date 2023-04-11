import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://microvisor.twilio.com"];
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
     * Create a config for an Account.
     */
    createAccountConfig(req: operations.CreateAccountConfigCreateAccountConfigRequest, security: operations.CreateAccountConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateAccountConfigResponse>;
    /**
     * Create a secret for an Account.
     */
    createAccountSecret(req: operations.CreateAccountSecretCreateAccountSecretRequest, security: operations.CreateAccountSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateAccountSecretResponse>;
    /**
     * Create a config for a Microvisor Device.
     */
    createDeviceConfig(req: operations.CreateDeviceConfigRequest, security: operations.CreateDeviceConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeviceConfigResponse>;
    /**
     * Create a secret for a Microvisor Device.
     */
    createDeviceSecret(req: operations.CreateDeviceSecretRequest, security: operations.CreateDeviceSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSecretResponse>;
    /**
     * Delete a config for an Account.
     */
    deleteAccountConfig(req: operations.DeleteAccountConfigRequest, security: operations.DeleteAccountConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteAccountConfigResponse>;
    /**
     * Delete a secret for an Account.
     */
    deleteAccountSecret(req: operations.DeleteAccountSecretRequest, security: operations.DeleteAccountSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteAccountSecretResponse>;
    /**
     * Delete a specific App.
     */
    deleteApp(req: operations.DeleteAppRequest, security: operations.DeleteAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * Delete a config for a Microvisor Device.
     */
    deleteDeviceConfig(req: operations.DeleteDeviceConfigRequest, security: operations.DeleteDeviceConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceConfigResponse>;
    /**
     * Delete a secret for a Microvisor Device.
     */
    deleteDeviceSecret(req: operations.DeleteDeviceSecretRequest, security: operations.DeleteDeviceSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSecretResponse>;
    /**
     * Retrieve a Config for an Account.
     */
    fetchAccountConfig(req: operations.FetchAccountConfigRequest, security: operations.FetchAccountConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAccountConfigResponse>;
    /**
     * Retrieve a Secret for an Account.
     */
    fetchAccountSecret(req: operations.FetchAccountSecretRequest, security: operations.FetchAccountSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAccountSecretResponse>;
    /**
     * Fetch a specific App.
     */
    fetchApp(req: operations.FetchAppRequest, security: operations.FetchAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAppResponse>;
    /**
     * Retrieve the Manifest for an App.
     */
    fetchAppManifest(req: operations.FetchAppManifestRequest, security: operations.FetchAppManifestSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAppManifestResponse>;
    /**
     * Fetch a specific Device.
     */
    fetchDevice(req: operations.FetchDeviceRequest, security: operations.FetchDeviceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeviceResponse>;
    /**
     * Retrieve a Config for a Device.
     */
    fetchDeviceConfig(req: operations.FetchDeviceConfigRequest, security: operations.FetchDeviceConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeviceConfigResponse>;
    /**
     * Retrieve a Secret for a Device.
     */
    fetchDeviceSecret(req: operations.FetchDeviceSecretRequest, security: operations.FetchDeviceSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeviceSecretResponse>;
    /**
     * Retrieve a list of all Configs for an Account.
     */
    listAccountConfig(req: operations.ListAccountConfigRequest, security: operations.ListAccountConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAccountConfigResponse>;
    /**
     * Retrieve a list of all Secrets for an Account.
     */
    listAccountSecret(req: operations.ListAccountSecretRequest, security: operations.ListAccountSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAccountSecretResponse>;
    /**
     * Retrieve a list of all Apps for an Account.
     */
    listApp(req: operations.ListAppRequest, security: operations.ListAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAppResponse>;
    /**
     * Retrieve a list of all Devices registered with the Account.
     */
    listDevice(req: operations.ListDeviceRequest, security: operations.ListDeviceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeviceResponse>;
    /**
     * Retrieve a list of all Configs for a Device.
     */
    listDeviceConfig(req: operations.ListDeviceConfigRequest, security: operations.ListDeviceConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeviceConfigResponse>;
    /**
     * Retrieve a list of all Secrets for a Device.
     */
    listDeviceSecret(req: operations.ListDeviceSecretRequest, security: operations.ListDeviceSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeviceSecretResponse>;
    /**
     * Update a config for an Account.
     */
    updateAccountConfig(req: operations.UpdateAccountConfigRequest, security: operations.UpdateAccountConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAccountConfigResponse>;
    /**
     * Update a secret for an Account.
     */
    updateAccountSecret(req: operations.UpdateAccountSecretRequest, security: operations.UpdateAccountSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAccountSecretResponse>;
    /**
     * Update a specific Device.
     */
    updateDevice(req: operations.UpdateDeviceRequest, security: operations.UpdateDeviceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceResponse>;
    /**
     * Update a config for a Microvisor Device.
     */
    updateDeviceConfig(req: operations.UpdateDeviceConfigRequest, security: operations.UpdateDeviceConfigSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceConfigResponse>;
    /**
     * Update a secret for a Microvisor Device.
     */
    updateDeviceSecret(req: operations.UpdateDeviceSecretRequest, security: operations.UpdateDeviceSecretSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSecretResponse>;
}
