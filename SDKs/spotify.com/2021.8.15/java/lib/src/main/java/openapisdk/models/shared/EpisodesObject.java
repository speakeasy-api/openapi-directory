package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodesObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episodes")
    public EpisodeObject[] episodes;
    public EpisodesObject withEpisodes(EpisodeObject[] episodes) {
        this.episodes = episodes;
        return this;
    }
}