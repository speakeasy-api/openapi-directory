package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicYarnAutoscalingConfig
 * Basic autoscaling configurations for YARN.
**/
public class BasicYarnAutoscalingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracefulDecommissionTimeout")
    public String gracefulDecommissionTimeout;
    public BasicYarnAutoscalingConfig withGracefulDecommissionTimeout(String gracefulDecommissionTimeout) {
        this.gracefulDecommissionTimeout = gracefulDecommissionTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleDownFactor")
    public Double scaleDownFactor;
    public BasicYarnAutoscalingConfig withScaleDownFactor(Double scaleDownFactor) {
        this.scaleDownFactor = scaleDownFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleDownMinWorkerFraction")
    public Double scaleDownMinWorkerFraction;
    public BasicYarnAutoscalingConfig withScaleDownMinWorkerFraction(Double scaleDownMinWorkerFraction) {
        this.scaleDownMinWorkerFraction = scaleDownMinWorkerFraction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleUpFactor")
    public Double scaleUpFactor;
    public BasicYarnAutoscalingConfig withScaleUpFactor(Double scaleUpFactor) {
        this.scaleUpFactor = scaleUpFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleUpMinWorkerFraction")
    public Double scaleUpMinWorkerFraction;
    public BasicYarnAutoscalingConfig withScaleUpMinWorkerFraction(Double scaleUpMinWorkerFraction) {
        this.scaleUpMinWorkerFraction = scaleUpMinWorkerFraction;
        return this;
    }
}