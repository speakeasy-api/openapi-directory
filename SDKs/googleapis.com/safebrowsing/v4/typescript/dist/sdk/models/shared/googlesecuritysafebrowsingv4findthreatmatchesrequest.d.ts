import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatInfo } from "./googlesecuritysafebrowsingv4threatinfo";
/**
 * Request to check entries against lists.
 */
export declare class GoogleSecuritySafebrowsingV4FindThreatMatchesRequest extends SpeakeasyBase {
    /**
     * The client metadata associated with Safe Browsing API requests.
     */
    client?: GoogleSecuritySafebrowsingV4ClientInfo;
    /**
     * The information regarding one or more threats that a client submits when checking for matches in threat lists.
     */
    threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}
