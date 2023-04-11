import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudWebriskV1SearchUrisResponseThreatUriThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}
/**
 * Contains threat information on a matching uri.
 */
export declare class GoogleCloudWebriskV1SearchUrisResponseThreatUri extends SpeakeasyBase {
    /**
     * The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives.
     */
    expireTime?: string;
    /**
     * The ThreatList this threat belongs to.
     */
    threatTypes?: GoogleCloudWebriskV1SearchUrisResponseThreatUriThreatTypesEnum[];
}
