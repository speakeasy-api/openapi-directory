package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGoogleAudiencesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAudiences")
    public GoogleAudience[] googleAudiences;
    public ListGoogleAudiencesResponse withGoogleAudiences(GoogleAudience[] googleAudiences) {
        this.googleAudiences = googleAudiences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGoogleAudiencesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}