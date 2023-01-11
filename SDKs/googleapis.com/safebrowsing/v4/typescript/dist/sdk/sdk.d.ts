import { AxiosInstance } from "axios";
import { EncodedFullHashes } from "./encodedfullhashes";
import { EncodedUpdates } from "./encodedupdates";
import { FullHashes } from "./fullhashes";
import { ThreatHits } from "./threathits";
import { ThreatListUpdates } from "./threatlistupdates";
import { ThreatLists } from "./threatlists";
import { ThreatMatches } from "./threatmatches";
export declare const ServerList: readonly ["https://safebrowsing.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
