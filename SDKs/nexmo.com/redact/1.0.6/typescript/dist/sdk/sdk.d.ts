import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/v1/redact"];
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
 * The [Redact API](/redact/overview) helps organisations meet their privacy compliance obligations. It provides controlled, on-demand redaction of private information from transactional records in the long-term storage. Note, Redact API does not have the capability to redact the short-lived server logs that are retained for a few weeks. For SMS customers that need immediate redaction, Vonage suggests using [Advanced Auto-redact](/redact/overview#auto-redact-vs-redact-api).
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
     * Redact a specific message
     */
    redactMessage(req: shared.RedactTransaction, security: operations.RedactMessageSecurity, config?: AxiosRequestConfig): Promise<operations.RedactMessageResponse>;
}
