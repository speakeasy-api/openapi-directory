package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Window {
    @JsonProperty("days")
    public Integer[] days;
    public Window withDays(Integer[] days) {
        this.days = days;
        return this;
    }
    @JsonProperty("length_hours")
    public Integer lengthHours;
    public Window withLengthHours(Integer lengthHours) {
        this.lengthHours = lengthHours;
        return this;
    }
    @JsonProperty("start_hour")
    public Integer startHour;
    public Window withStartHour(Integer startHour) {
        this.startHour = startHour;
        return this;
    }
}