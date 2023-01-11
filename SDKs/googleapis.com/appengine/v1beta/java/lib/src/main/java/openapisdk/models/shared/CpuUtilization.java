package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CpuUtilization
 * Target scaling by CPU usage.
**/
public class CpuUtilization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationWindowLength")
    public String aggregationWindowLength;
    public CpuUtilization withAggregationWindowLength(String aggregationWindowLength) {
        this.aggregationWindowLength = aggregationWindowLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetUtilization")
    public Double targetUtilization;
    public CpuUtilization withTargetUtilization(Double targetUtilization) {
        this.targetUtilization = targetUtilization;
        return this;
    }
}