import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage the settings on your account
 */
export declare class Configuration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Change Account Settings
     *
     * @remarks
     * Update the default webhook URLs associated with your account:
     *   * Callback URL for incoming SMS messages
     *   * Callback URL for delivery receipts
     *
     * Note that the URLs you provide must be valid and active. Vonage will check that they return a 200 OK response before the setting is saved.
     */
    changeAccountSettings(req: operations.ChangeAccountSettingsRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ChangeAccountSettingsResponse>;
    /**
     * Register an email sender
     *
     * @remarks
     * Register an email sender with an API Key for using email with Verify V2.
     */
    registerSender(req: operations.RegisterSenderRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.RegisterSenderResponse>;
}
