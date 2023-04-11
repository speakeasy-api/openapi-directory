import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of source reported.
 */
export declare enum GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum {
    ThreatSourceTypeUnspecified = "THREAT_SOURCE_TYPE_UNSPECIFIED",
    MatchingUrl = "MATCHING_URL",
    TabUrl = "TAB_URL",
    TabRedirect = "TAB_REDIRECT",
    TabResource = "TAB_RESOURCE"
}
/**
 * A single resource related to a threat hit.
 */
export declare class GoogleSecuritySafebrowsingV4ThreatHitThreatSource extends SpeakeasyBase {
    /**
     * Referrer of the resource. Only set if the referrer is available.
     */
    referrer?: string;
    /**
     * The remote IP of the resource in ASCII format. Either IPv4 or IPv6.
     */
    remoteIp?: string;
    /**
     * The type of source reported.
     */
    type?: GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum;
    /**
     * The URL of the resource.
     */
    url?: string;
}
