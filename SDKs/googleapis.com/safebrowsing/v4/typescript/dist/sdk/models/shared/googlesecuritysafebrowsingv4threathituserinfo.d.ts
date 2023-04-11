import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the user that encountered the threat.
 */
export declare class GoogleSecuritySafebrowsingV4ThreatHitUserInfo extends SpeakeasyBase {
    /**
     * The UN M.49 region code associated with the user's location.
     */
    regionCode?: string;
    /**
     * Unique user identifier defined by the client.
     */
    userId?: string;
}
