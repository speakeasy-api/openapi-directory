package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostScrobbleEpisodesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode_id")
    public Long episodeId;
    public PostScrobbleEpisodesRequestBody withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marked_at")
    public Long markedAt;
    public PostScrobbleEpisodesRequestBody withMarkedAt(Long markedAt) {
        this.markedAt = markedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Object type;
    public PostScrobbleEpisodesRequestBody withType(Object type) {
        this.type = type;
        return this;
    }
}