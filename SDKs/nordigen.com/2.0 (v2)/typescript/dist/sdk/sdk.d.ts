import { Accounts } from "./accounts";
import { Agreements } from "./agreements";
import { Institutions } from "./institutions";
import * as shared from "./models/shared";
import { Payments } from "./payments";
import { Premium } from "./premium";
import { Requisitions } from "./requisitions";
import { Token } from "./token";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://ob.nordigen.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
export declare class SDK {
    accounts: Accounts;
    agreements: Agreements;
    institutions: Institutions;
    payments: Payments;
    premium: Premium;
    requisitions: Requisitions;
    token: Token;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
