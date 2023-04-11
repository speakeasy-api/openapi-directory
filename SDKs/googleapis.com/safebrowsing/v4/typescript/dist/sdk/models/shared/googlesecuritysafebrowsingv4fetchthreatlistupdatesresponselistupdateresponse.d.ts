import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSecuritySafebrowsingV4Checksum } from "./googlesecuritysafebrowsingv4checksum";
import { GoogleSecuritySafebrowsingV4ThreatEntrySet } from "./googlesecuritysafebrowsingv4threatentryset";
/**
 * The platform type for which data is returned.
 */
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum {
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
 * The type of response. This may indicate that an action is required by the client when the response is received.
 */
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    PartialUpdate = "PARTIAL_UPDATE",
    FullUpdate = "FULL_UPDATE"
}
/**
 * The format of the threats.
 */
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum {
    ThreatEntryTypeUnspecified = "THREAT_ENTRY_TYPE_UNSPECIFIED",
    Url = "URL",
    Executable = "EXECUTABLE",
    IpRange = "IP_RANGE",
    ChromeExtension = "CHROME_EXTENSION",
    Filename = "FILENAME",
    Cert = "CERT"
}
/**
 * The threat type for which data is returned.
 */
export declare enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum {
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
 * An update to an individual list.
 */
export declare class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse extends SpeakeasyBase {
    /**
     * A set of entries to add to a local threat type's list. Repeated to allow for a combination of compressed and raw data to be sent in a single response.
     */
    additions?: GoogleSecuritySafebrowsingV4ThreatEntrySet[];
    /**
     * The expected state of a client's local database.
     */
    checksum?: GoogleSecuritySafebrowsingV4Checksum;
    /**
     * The new client state, in encrypted format. Opaque to clients.
     */
    newClientState?: string;
    /**
     * The platform type for which data is returned.
     */
    platformType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum;
    /**
     * A set of entries to remove from a local threat type's list. In practice, this field is empty or contains exactly one ThreatEntrySet.
     */
    removals?: GoogleSecuritySafebrowsingV4ThreatEntrySet[];
    /**
     * The type of response. This may indicate that an action is required by the client when the response is received.
     */
    responseType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum;
    /**
     * The format of the threats.
     */
    threatEntryType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum;
    /**
     * The threat type for which data is returned.
     */
    threatType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum;
}
