package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarkedEpisode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public MarkedEpisodeEmbedded embedded;
    public MarkedEpisode withEmbedded(MarkedEpisodeEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode_id")
    public Long episodeId;
    public MarkedEpisode withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marked_at")
    public Long markedAt;
    public MarkedEpisode withMarkedAt(Long markedAt) {
        this.markedAt = markedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Object type;
    public MarkedEpisode withType(Object type) {
        this.type = type;
        return this;
    }
}