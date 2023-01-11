package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatListDescriptor
 * Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list.
**/
public class GoogleSecuritySafebrowsingV4ThreatListDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformType")
    public GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum platformType;
    public GoogleSecuritySafebrowsingV4ThreatListDescriptor withPlatformType(GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum platformType) {
        this.platformType = platformType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatEntryType")
    public GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum threatEntryType;
    public GoogleSecuritySafebrowsingV4ThreatListDescriptor withThreatEntryType(GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatEntryTypeEnum threatEntryType) {
        this.threatEntryType = threatEntryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatType")
    public GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum threatType;
    public GoogleSecuritySafebrowsingV4ThreatListDescriptor withThreatType(GoogleSecuritySafebrowsingV4ThreatListDescriptorThreatTypeEnum threatType) {
        this.threatType = threatType;
        return this;
    }
}