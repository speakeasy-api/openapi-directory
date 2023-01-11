package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TimeWindowBreak {
    @JsonProperty("duration")
    public Long duration;
    public TimeWindowBreak withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("earliest")
    public Long earliest;
    public TimeWindowBreak withEarliest(Long earliest) {
        this.earliest = earliest;
        return this;
    }
    @JsonProperty("latest")
    public Long latest;
    public TimeWindowBreak withLatest(Long latest) {
        this.latest = latest;
        return this;
    }
}