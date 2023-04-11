import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4ClientInfo } from "./googlesecuritysafebrowsingv4clientinfo";
import { GoogleSecuritySafebrowsingV4ThreatEntry } from "./googlesecuritysafebrowsingv4threatentry";
import { GoogleSecuritySafebrowsingV4ThreatHitThreatSource } from "./googlesecuritysafebrowsingv4threathitthreatsource";
import { GoogleSecuritySafebrowsingV4ThreatHitUserInfo } from "./googlesecuritysafebrowsingv4threathituserinfo";
/**
 * The platform type reported.
 */
export declare enum GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum {
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
 * The threat type reported.
 */
export declare enum GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum {
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
export declare class GoogleSecuritySafebrowsingV4ThreatHit extends SpeakeasyBase {
    /**
     * The client metadata associated with Safe Browsing API requests.
     */
    clientInfo?: GoogleSecuritySafebrowsingV4ClientInfo;
    /**
     * An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
     */
    entry?: GoogleSecuritySafebrowsingV4ThreatEntry;
    /**
     * The platform type reported.
     */
    platformType?: GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum;
    /**
     * The resources related to the threat hit.
     */
    resources?: GoogleSecuritySafebrowsingV4ThreatHitThreatSource[];
    /**
     * The threat type reported.
     */
    threatType?: GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum;
    /**
     * Details about the user that encountered the threat.
     */
    userInfo?: GoogleSecuritySafebrowsingV4ThreatHitUserInfo;
}
