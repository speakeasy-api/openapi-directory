package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Timer {
    @JsonProperty("fire_time")
    public Long fireTime;
    public Timer withFireTime(Long fireTime) {
        this.fireTime = fireTime;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Timer withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("original_duration")
    public Integer originalDuration;
    public Timer withOriginalDuration(Integer originalDuration) {
        this.originalDuration = originalDuration;
        return this;
    }
    @JsonProperty("status")
    public Integer status;
    public Timer withStatus(Integer status) {
        this.status = status;
        return this;
    }
}