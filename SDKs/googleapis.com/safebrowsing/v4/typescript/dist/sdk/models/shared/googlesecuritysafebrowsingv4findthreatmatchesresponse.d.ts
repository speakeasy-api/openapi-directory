import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatMatch } from "./googlesecuritysafebrowsingv4threatmatch";
/**
 * Successful response
 */
export declare class GoogleSecuritySafebrowsingV4FindThreatMatchesResponse extends SpeakeasyBase {
    /**
     * The threat list matches.
     */
    matches?: GoogleSecuritySafebrowsingV4ThreatMatch[];
}
