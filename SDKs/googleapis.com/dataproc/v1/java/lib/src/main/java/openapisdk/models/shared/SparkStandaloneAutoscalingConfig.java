package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkStandaloneAutoscalingConfig
 * Basic autoscaling configurations for Spark Standalone.
**/
public class SparkStandaloneAutoscalingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracefulDecommissionTimeout")
    public String gracefulDecommissionTimeout;
    public SparkStandaloneAutoscalingConfig withGracefulDecommissionTimeout(String gracefulDecommissionTimeout) {
        this.gracefulDecommissionTimeout = gracefulDecommissionTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleDownFactor")
    public Double scaleDownFactor;
    public SparkStandaloneAutoscalingConfig withScaleDownFactor(Double scaleDownFactor) {
        this.scaleDownFactor = scaleDownFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleDownMinWorkerFraction")
    public Double scaleDownMinWorkerFraction;
    public SparkStandaloneAutoscalingConfig withScaleDownMinWorkerFraction(Double scaleDownMinWorkerFraction) {
        this.scaleDownMinWorkerFraction = scaleDownMinWorkerFraction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleUpFactor")
    public Double scaleUpFactor;
    public SparkStandaloneAutoscalingConfig withScaleUpFactor(Double scaleUpFactor) {
        this.scaleUpFactor = scaleUpFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaleUpMinWorkerFraction")
    public Double scaleUpMinWorkerFraction;
    public SparkStandaloneAutoscalingConfig withScaleUpMinWorkerFraction(Double scaleUpMinWorkerFraction) {
        this.scaleUpMinWorkerFraction = scaleUpMinWorkerFraction;
        return this;
    }
}