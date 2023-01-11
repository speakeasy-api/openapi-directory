package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeRotation
 * Creative Rotation.
**/
public class CreativeRotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeAssignments")
    public CreativeAssignment[] creativeAssignments;
    public CreativeRotation withCreativeAssignments(CreativeAssignment[] creativeAssignments) {
        this.creativeAssignments = creativeAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeOptimizationConfigurationId")
    public String creativeOptimizationConfigurationId;
    public CreativeRotation withCreativeOptimizationConfigurationId(String creativeOptimizationConfigurationId) {
        this.creativeOptimizationConfigurationId = creativeOptimizationConfigurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreativeRotationTypeEnum type;
    public CreativeRotation withType(CreativeRotationTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weightCalculationStrategy")
    public CreativeRotationWeightCalculationStrategyEnum weightCalculationStrategy;
    public CreativeRotation withWeightCalculationStrategy(CreativeRotationWeightCalculationStrategyEnum weightCalculationStrategy) {
        this.weightCalculationStrategy = weightCalculationStrategy;
        return this;
    }
}