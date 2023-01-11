package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostScrobbleShowsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airdate")
    public LocalDate airdate;
    public PostScrobbleShowsRequestBody withAirdate(LocalDate airdate) {
        this.airdate = airdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode")
    public Long episode;
    public PostScrobbleShowsRequestBody withEpisode(Long episode) {
        this.episode = episode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marked_at")
    public Long markedAt;
    public PostScrobbleShowsRequestBody withMarkedAt(Long markedAt) {
        this.markedAt = markedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public PostScrobbleShowsRequestBody withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Object type;
    public PostScrobbleShowsRequestBody withType(Object type) {
        this.type = type;
        return this;
    }
}