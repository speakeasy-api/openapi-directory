package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listUpdateResponses")
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse[] listUpdateResponses;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse withListUpdateResponses(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse[] listUpdateResponses) {
        this.listUpdateResponses = listUpdateResponses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumWaitDuration")
    public String minimumWaitDuration;
    public GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse withMinimumWaitDuration(String minimumWaitDuration) {
        this.minimumWaitDuration = minimumWaitDuration;
        return this;
    }
}