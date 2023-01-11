package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints
 * The constraints for this update.
**/
public class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceLocation")
    public String deviceLocation;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints withDeviceLocation(String deviceLocation) {
        this.deviceLocation = deviceLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDatabaseEntries")
    public Integer maxDatabaseEntries;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints withMaxDatabaseEntries(Integer maxDatabaseEntries) {
        this.maxDatabaseEntries = maxDatabaseEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUpdateEntries")
    public Integer maxUpdateEntries;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints withMaxUpdateEntries(Integer maxUpdateEntries) {
        this.maxUpdateEntries = maxUpdateEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedCompressions")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum[] supportedCompressions;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints withSupportedCompressions(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum[] supportedCompressions) {
        this.supportedCompressions = supportedCompressions;
        return this;
    }
}