import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatInfo } from "./googlesecuritysafebrowsingv4threatinfo";
/**
 * Request to return full hashes matched by the provided hash prefixes.
 */
export declare class GoogleSecuritySafebrowsingV4FindFullHashesRequest extends SpeakeasyBase {
    /**
     * The client metadata associated with Safe Browsing API requests.
     */
    apiClient?: GoogleSecuritySafebrowsingV4ClientInfo;
    /**
     * The client metadata associated with Safe Browsing API requests.
     */
    client?: GoogleSecuritySafebrowsingV4ClientInfo;
    /**
     * The current client states for each of the client's local threat lists.
     */
    clientStates?: string[];
    /**
     * The information regarding one or more threats that a client submits when checking for matches in threat lists.
     */
    threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}
