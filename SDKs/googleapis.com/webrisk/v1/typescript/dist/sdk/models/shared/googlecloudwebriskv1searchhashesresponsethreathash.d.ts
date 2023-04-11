import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}
/**
 * Contains threat information on a matching hash.
 */
export declare class GoogleCloudWebriskV1SearchHashesResponseThreatHash extends SpeakeasyBase {
    /**
     * The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives.
     */
    expireTime?: string;
    /**
     * A 32 byte SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.
     */
    hash?: string;
    /**
     * The ThreatList this threat belongs to. This must contain at least one entry.
     */
    threatTypes?: GoogleCloudWebriskV1SearchHashesResponseThreatHashThreatTypesEnum[];
}
