import { AcmeChallengeSets } from "./acmechallengesets";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://acmedns.googleapis.com/"];
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
 * Google Domains ACME DNS API that allows users to complete ACME DNS-01 challenges for a domain.
 *
 * @see {@link https://developers.google.com/domains/acme-dns/}
 */
export declare class SDK {
    acmeChallengeSets: AcmeChallengeSets;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
