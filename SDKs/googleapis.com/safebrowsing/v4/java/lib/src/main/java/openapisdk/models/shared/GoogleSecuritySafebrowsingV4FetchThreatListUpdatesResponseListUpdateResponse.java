package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse
 * An update to an individual list.
**/
public class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additions")
    public GoogleSecuritySafebrowsingV4ThreatEntrySet[] additions;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse withAdditions(GoogleSecuritySafebrowsingV4ThreatEntrySet[] additions) {
        this.additions = additions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checksum")
    public GoogleSecuritySafebrowsingV4Checksum checksum;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse withChecksum(GoogleSecuritySafebrowsingV4Checksum checksum) {
        this.checksum = checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newClientState")
    public String newClientState;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse withNewClientState(String newClientState) {
        this.newClientState = newClientState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformType")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum platformType;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse withPlatformType(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponsePlatformTypeEnum platformType) {
        this.platformType = platformType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removals")
    public GoogleSecuritySafebrowsingV4ThreatEntrySet[] removals;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse withRemovals(GoogleSecuritySafebrowsingV4ThreatEntrySet[] removals) {
        this.removals = removals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseType")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum responseType;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse withResponseType(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseTypeEnum responseType) {
        this.responseType = responseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatEntryType")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum threatEntryType;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse withThreatEntryType(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatEntryTypeEnum threatEntryType) {
        this.threatEntryType = threatEntryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatType")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum threatType;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse withThreatType(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseThreatTypeEnum threatType) {
        this.threatType = threatType;
        return this;
    }
}