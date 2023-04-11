import { EncodedFullHashes } from "./encodedfullhashes";
import { EncodedUpdates } from "./encodedupdates";
import { FullHashes } from "./fullhashes";
import { ThreatHits } from "./threathits";
import { ThreatLists } from "./threatlists";
import { ThreatListUpdates } from "./threatlistupdates";
import { ThreatMatches } from "./threatmatches";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://safebrowsing.googleapis.com/"];
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
 * Enables client applications to check web resources (most commonly URLs) against Google-generated lists of unsafe web resources. The Safe Browsing APIs are for non-commercial use only. If you need to use APIs to detect malicious URLs for commercial purposes – meaning “for sale or revenue-generating purposes” – please refer to the Web Risk API.
 *
 * @see {@link https://developers.google.com/safe-browsing/}
 */
export declare class SDK {
    encodedFullHashes: EncodedFullHashes;
    encodedUpdates: EncodedUpdates;
    fullHashes: FullHashes;
    threatHits: ThreatHits;
    threatListUpdates: ThreatListUpdates;
    threatLists: ThreatLists;
    threatMatches: ThreatMatches;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
