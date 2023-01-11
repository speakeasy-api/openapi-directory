package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest
 * A single list update request.
**/
public class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraints")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints constraints;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest withConstraints(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints constraints) {
        this.constraints = constraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformType")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum platformType;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest withPlatformType(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformTypeEnum platformType) {
        this.platformType = platformType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatEntryType")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum threatEntryType;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest withThreatEntryType(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryTypeEnum threatEntryType) {
        this.threatEntryType = threatEntryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatType")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum threatType;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest withThreatType(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatTypeEnum threatType) {
        this.threatType = threatType;
        return this;
    }
}