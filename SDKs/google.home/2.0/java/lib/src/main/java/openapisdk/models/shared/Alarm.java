package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Alarm {
    @JsonProperty("date_pattern")
    public DatePattern datePattern;
    public Alarm withDatePattern(DatePattern datePattern) {
        this.datePattern = datePattern;
        return this;
    }
    @JsonProperty("fire_time")
    public Double fireTime;
    public Alarm withFireTime(Double fireTime) {
        this.fireTime = fireTime;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Alarm withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("status")
    public Integer status;
    public Alarm withStatus(Integer status) {
        this.status = status;
        return this;
    }
    @JsonProperty("time_pattern")
    public TimePattern timePattern;
    public Alarm withTimePattern(TimePattern timePattern) {
        this.timePattern = timePattern;
        return this;
    }
}