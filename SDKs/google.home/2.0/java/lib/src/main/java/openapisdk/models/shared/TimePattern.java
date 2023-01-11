package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TimePattern {
    @JsonProperty("hour")
    public Integer hour;
    public TimePattern withHour(Integer hour) {
        this.hour = hour;
        return this;
    }
    @JsonProperty("minute")
    public Integer minute;
    public TimePattern withMinute(Integer minute) {
        this.minute = minute;
        return this;
    }
    @JsonProperty("second")
    public Integer second;
    public TimePattern withSecond(Integer second) {
        this.second = second;
        return this;
    }
}