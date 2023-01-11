package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OptimizationActivity
 * Creative optimization activity.
**/
public class OptimizationActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityId")
    public String floodlightActivityId;
    public OptimizationActivity withFloodlightActivityId(String floodlightActivityId) {
        this.floodlightActivityId = floodlightActivityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityIdDimensionValue")
    public DimensionValue floodlightActivityIdDimensionValue;
    public OptimizationActivity withFloodlightActivityIdDimensionValue(DimensionValue floodlightActivityIdDimensionValue) {
        this.floodlightActivityIdDimensionValue = floodlightActivityIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Integer weight;
    public OptimizationActivity withWeight(Integer weight) {
        this.weight = weight;
        return this;
    }
}