import { Account } from "./account";
import { CiscoSNTC } from "./ciscosntc";
import { Export } from "./export";
import { Organization } from "./organization";
import { Public } from "./public";
import { ServiceNow } from "./servicenow";
import { Splunk } from "./splunk";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://console.rumble.run/api/v1.0"];
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
 * <p><b><i>Rumble Network Discovery is now runZero. <a href="https://www.runzero.com/blog/introducing-runzero/">Read the announcement</a></i></b>.</p> <p>This API is frozen and no longer being updated as of version 2.15.0.</p> <p>See our latest API documentation at <a href="https://app.swaggerhub.com/apis-docs/runZero/runZero">swaggerhub.com/apis-docs/runZero/runZero</a>.</p>
 *
 * @remarks
 *
 */
export declare class SDK {
    account: Account;
    ciscoSNTC: CiscoSNTC;
    /**
     * Requires Export Token or Organization Key
     */
    export: Export;
    /**
     * Requires Organization Key
     */
    organization: Organization;
    /**
     * Unauthenticated
     */
    public: Public;
    serviceNow: ServiceNow;
    splunk: Splunk;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
