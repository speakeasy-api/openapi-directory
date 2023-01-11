package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatMatch
 * A match when checking a threat entry in the Safe Browsing threat lists.
**/
public class GoogleSecuritySafebrowsingV4ThreatMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheDuration")
    public String cacheDuration;
    public GoogleSecuritySafebrowsingV4ThreatMatch withCacheDuration(String cacheDuration) {
        this.cacheDuration = cacheDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformType")
    public GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum platformType;
    public GoogleSecuritySafebrowsingV4ThreatMatch withPlatformType(GoogleSecuritySafebrowsingV4ThreatMatchPlatformTypeEnum platformType) {
        this.platformType = platformType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threat")
    public GoogleSecuritySafebrowsingV4ThreatEntry threat;
    public GoogleSecuritySafebrowsingV4ThreatMatch withThreat(GoogleSecuritySafebrowsingV4ThreatEntry threat) {
        this.threat = threat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatEntryMetadata")
    public GoogleSecuritySafebrowsingV4ThreatEntryMetadata threatEntryMetadata;
    public GoogleSecuritySafebrowsingV4ThreatMatch withThreatEntryMetadata(GoogleSecuritySafebrowsingV4ThreatEntryMetadata threatEntryMetadata) {
        this.threatEntryMetadata = threatEntryMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatEntryType")
    public GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum threatEntryType;
    public GoogleSecuritySafebrowsingV4ThreatMatch withThreatEntryType(GoogleSecuritySafebrowsingV4ThreatMatchThreatEntryTypeEnum threatEntryType) {
        this.threatEntryType = threatEntryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatType")
    public GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum threatType;
    public GoogleSecuritySafebrowsingV4ThreatMatch withThreatType(GoogleSecuritySafebrowsingV4ThreatMatchThreatTypeEnum threatType) {
        this.threatType = threatType;
        return this;
    }
}