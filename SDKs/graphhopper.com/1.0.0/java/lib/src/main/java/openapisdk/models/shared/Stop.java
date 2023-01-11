package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Stop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Address address;
    public Stop withAddress(Address address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Stop withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public Stop withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preparation_time")
    public Long preparationTime;
    public Stop withPreparationTime(Long preparationTime) {
        this.preparationTime = preparationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_windows")
    public TimeWindow[] timeWindows;
    public Stop withTimeWindows(TimeWindow[] timeWindows) {
        this.timeWindows = timeWindows;
        return this;
    }
}