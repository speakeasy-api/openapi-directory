import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatMatch } from "./googlesecuritysafebrowsingv4threatmatch";
/**
 * Successful response
 */
export declare class GoogleSecuritySafebrowsingV4FindFullHashesResponse extends SpeakeasyBase {
    /**
     * The full hashes that matched the requested prefixes.
     */
    matches?: GoogleSecuritySafebrowsingV4ThreatMatch[];
    /**
     * The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want.
     */
    minimumWaitDuration?: string;
    /**
     * For requested entities that did not match the threat list, how long to cache the response.
     */
    negativeCacheDuration?: string;
}
