package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleSearchIdeahubV1betaListIdeasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ideas")
    public GoogleSearchIdeahubV1betaIdea[] ideas;
    public GoogleSearchIdeahubV1betaListIdeasResponse withIdeas(GoogleSearchIdeahubV1betaIdea[] ideas) {
        this.ideas = ideas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleSearchIdeahubV1betaListIdeasResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}