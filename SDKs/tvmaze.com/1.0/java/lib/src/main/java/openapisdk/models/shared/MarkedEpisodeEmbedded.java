package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarkedEpisodeEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode")
    public java.util.Map<String, Object> episode;
    public MarkedEpisodeEmbedded withEpisode(java.util.Map<String, Object> episode) {
        this.episode = episode;
        return this;
    }
}