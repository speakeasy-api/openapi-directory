package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleSecuritySafebrowsingV4ListThreatListsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatLists")
    public GoogleSecuritySafebrowsingV4ThreatListDescriptor[] threatLists;
    public GoogleSecuritySafebrowsingV4ListThreatListsResponse withThreatLists(GoogleSecuritySafebrowsingV4ThreatListDescriptor[] threatLists) {
        this.threatLists = threatLists;
        return this;
    }
}