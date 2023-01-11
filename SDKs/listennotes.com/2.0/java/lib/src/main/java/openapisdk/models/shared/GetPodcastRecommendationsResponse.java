package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPodcastRecommendationsResponse {
    @JsonProperty("recommendations")
    public PodcastSimple[] recommendations;
    public GetPodcastRecommendationsResponse withRecommendations(PodcastSimple[] recommendations) {
        this.recommendations = recommendations;
        return this;
    }
}