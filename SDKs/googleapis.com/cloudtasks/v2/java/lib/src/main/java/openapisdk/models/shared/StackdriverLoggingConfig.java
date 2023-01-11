package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StackdriverLoggingConfig
 * Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/).
**/
public class StackdriverLoggingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplingRatio")
    public Double samplingRatio;
    public StackdriverLoggingConfig withSamplingRatio(Double samplingRatio) {
        this.samplingRatio = samplingRatio;
        return this;
    }
}