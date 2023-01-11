package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BlinkDeviceLedsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public BlinkDeviceLedsRequestBody withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duty")
    public Long duty;
    public BlinkDeviceLedsRequestBody withDuty(Long duty) {
        this.duty = duty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public BlinkDeviceLedsRequestBody withPeriod(Long period) {
        this.period = period;
        return this;
    }
}