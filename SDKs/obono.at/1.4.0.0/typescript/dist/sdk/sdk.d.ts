import { Auth } from "./auth";
import { Beleg } from "./beleg";
import { Export } from "./export";
import * as shared from "./models/shared";
import { Monatsbelege } from "./monatsbelege";
import { Registrierkasse } from "./registrierkasse";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/api/v1"];
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
/**
 * Provides a RESTful API for interacting with virtual cash registers and creating receipts that are conform with the Registrierkassensicherheitsverordnung (RKSV).
 *
 * @remarks
 *
 * You may find our [automatically generated clients](./clients) for various programming languages and environments helpful...
 *
 */
export declare class SDK {
    /**
     * authentication and authorization
     */
    auth: Auth;
    /**
     * resources concerning a "Beleg"
     */
    beleg: Beleg;
    export: Export;
    monatsbelege: Monatsbelege;
    /**
     * resources concerning a "Registrierkasse"
     */
    registrierkasse: Registrierkasse;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
