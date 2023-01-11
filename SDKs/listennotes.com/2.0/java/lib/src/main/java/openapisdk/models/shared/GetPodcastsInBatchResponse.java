package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPodcastsInBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_episodes")
    public EpisodeSimple[] latestEpisodes;
    public GetPodcastsInBatchResponse withLatestEpisodes(EpisodeSimple[] latestEpisodes) {
        this.latestEpisodes = latestEpisodes;
        return this;
    }
    @JsonProperty("podcasts")
    public PodcastSimple[] podcasts;
    public GetPodcastsInBatchResponse withPodcasts(PodcastSimple[] podcasts) {
        this.podcasts = podcasts;
        return this;
    }
}