package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEpisodeRecommendationsResponse {
    @JsonProperty("recommendations")
    public EpisodeSimple[] recommendations;
    public GetEpisodeRecommendationsResponse withRecommendations(EpisodeSimple[] recommendations) {
        this.recommendations = recommendations;
        return this;
    }
}