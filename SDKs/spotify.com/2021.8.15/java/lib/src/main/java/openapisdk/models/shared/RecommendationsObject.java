package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationsObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-recommendationsobject - Find more info on the official Spotify Web API Reference
**/
public class RecommendationsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seeds")
    public RecommendationSeedObject[] seeds;
    public RecommendationsObject withSeeds(RecommendationSeedObject[] seeds) {
        this.seeds = seeds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public TrackObject[] tracks;
    public RecommendationsObject withTracks(TrackObject[] tracks) {
        this.tracks = tracks;
        return this;
    }
}