package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEpisodesInBatchResponse {
    @JsonProperty("episodes")
    public EpisodeSimple[] episodes;
    public GetEpisodesInBatchResponse withEpisodes(EpisodeSimple[] episodes) {
        this.episodes = episodes;
        return this;
    }
}