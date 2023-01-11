package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EstimatedDiameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_diameter_max")
    public Double estimatedDiameterMax;
    public EstimatedDiameter withEstimatedDiameterMax(Double estimatedDiameterMax) {
        this.estimatedDiameterMax = estimatedDiameterMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimated_diameter_min")
    public Double estimatedDiameterMin;
    public EstimatedDiameter withEstimatedDiameterMin(Double estimatedDiameterMin) {
        this.estimatedDiameterMin = estimatedDiameterMin;
        return this;
    }
}