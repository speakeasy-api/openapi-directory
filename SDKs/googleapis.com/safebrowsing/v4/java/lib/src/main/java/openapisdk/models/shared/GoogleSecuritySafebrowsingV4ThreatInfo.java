package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatInfo
 * The information regarding one or more threats that a client submits when checking for matches in threat lists.
**/
public class GoogleSecuritySafebrowsingV4ThreatInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformTypes")
    public GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum[] platformTypes;
    public GoogleSecuritySafebrowsingV4ThreatInfo withPlatformTypes(GoogleSecuritySafebrowsingV4ThreatInfoPlatformTypesEnum[] platformTypes) {
        this.platformTypes = platformTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatEntries")
    public GoogleSecuritySafebrowsingV4ThreatEntry[] threatEntries;
    public GoogleSecuritySafebrowsingV4ThreatInfo withThreatEntries(GoogleSecuritySafebrowsingV4ThreatEntry[] threatEntries) {
        this.threatEntries = threatEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatEntryTypes")
    public GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum[] threatEntryTypes;
    public GoogleSecuritySafebrowsingV4ThreatInfo withThreatEntryTypes(GoogleSecuritySafebrowsingV4ThreatInfoThreatEntryTypesEnum[] threatEntryTypes) {
        this.threatEntryTypes = threatEntryTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatTypes")
    public GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum[] threatTypes;
    public GoogleSecuritySafebrowsingV4ThreatInfo withThreatTypes(GoogleSecuritySafebrowsingV4ThreatInfoThreatTypesEnum[] threatTypes) {
        this.threatTypes = threatTypes;
        return this;
    }
}