package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCombinedAudiencesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combinedAudiences")
    public CombinedAudience[] combinedAudiences;
    public ListCombinedAudiencesResponse withCombinedAudiences(CombinedAudience[] combinedAudiences) {
        this.combinedAudiences = combinedAudiences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCombinedAudiencesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}