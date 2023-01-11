package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerfSample
 * Resource representing a single performance measure or data point
**/
public class PerfSample {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleTime")
    public Timestamp sampleTime;
    public PerfSample withSampleTime(Timestamp sampleTime) {
        this.sampleTime = sampleTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public PerfSample withValue(Double value) {
        this.value = value;
        return this;
    }
}