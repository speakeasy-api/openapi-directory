package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleSearchIdeahubV1alphaListIdeasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ideas")
    public GoogleSearchIdeahubV1alphaIdea[] ideas;
    public GoogleSearchIdeahubV1alphaListIdeasResponse withIdeas(GoogleSearchIdeahubV1alphaIdea[] ideas) {
        this.ideas = ideas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleSearchIdeahubV1alphaListIdeasResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}