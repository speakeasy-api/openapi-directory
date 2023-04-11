import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ThreatEntry } from "./googlesecuritysafebrowsingv4threatentry";
import { GoogleSecuritySafebrowsingV4ThreatEntryMetadata } from "./googlesecuritysafebrowsingv4threatentrymetadata";
/**
 * The platform type matching this threat.
 */
export declare enum GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Android = "ANDROID",
    Osx = "OSX",
    Ios = "IOS",
    AnyPlatform = "ANY_PLATFORM",
    AllPlatforms = "ALL_PLATFORMS",
    Chrome = "CHROME"
}
/**
 * The threat entry type matching this threat.
 */
export declare enum GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum {
    ThreatEntryTypeUnspecified = "THREAT_ENTRY_TYPE_UNSPECIFIED",
    Url = "URL",
    Executable = "EXECUTABLE",
    IpRange = "IP_RANGE",
    ChromeExtension = "CHROME_EXTENSION",
    Filename = "FILENAME",
    Cert = "CERT"
}
/**
 * The threat type matching this threat.
 */
export declare enum GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    PotentiallyHarmfulApplication = "POTENTIALLY_HARMFUL_APPLICATION",
    SocialEngineeringInternal = "SOCIAL_ENGINEERING_INTERNAL",
    ApiAbuse = "API_ABUSE",
    MaliciousBinary = "MALICIOUS_BINARY",
    CsdWhitelist = "CSD_WHITELIST",
    CsdDownloadWhitelist = "CSD_DOWNLOAD_WHITELIST",
    ClientIncident = "CLIENT_INCIDENT",
    ClientIncidentWhitelist = "CLIENT_INCIDENT_WHITELIST",
    ApkMalwareOffline = "APK_MALWARE_OFFLINE",
    SubresourceFilter = "SUBRESOURCE_FILTER",
    Suspicious = "SUSPICIOUS",
    TrickToBill = "TRICK_TO_BILL",
    HighConfidenceAllowlist = "HIGH_CONFIDENCE_ALLOWLIST",
    AccuracyTips = "ACCURACY_TIPS"
}
/**
 * A match when checking a threat entry in the Safe Browsing threat lists.
 */
export declare class GoogleSecuritySafebrowsingV4ThreatMatch extends SpeakeasyBase {
    /**
     * The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives.
     */
    cacheDuration?: string;
    /**
     * The platform type matching this threat.
     */
    platformType?: GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum;
    /**
     * An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
     */
    threat?: GoogleSecuritySafebrowsingV4ThreatEntry;
    /**
     * The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
     */
    threatEntryMetadata?: GoogleSecuritySafebrowsingV4ThreatEntryMetadata;
    /**
     * The threat entry type matching this threat.
     */
    threatEntryType?: GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum;
    /**
     * The threat type matching this threat.
     */
    threatType?: GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum;
}
