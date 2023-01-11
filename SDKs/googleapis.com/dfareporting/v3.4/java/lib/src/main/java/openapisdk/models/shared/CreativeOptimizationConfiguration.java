package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeOptimizationConfiguration
 * Creative optimization settings.
**/
public class CreativeOptimizationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreativeOptimizationConfiguration withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreativeOptimizationConfiguration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optimizationActivitys")
    public OptimizationActivity[] optimizationActivitys;
    public CreativeOptimizationConfiguration withOptimizationActivitys(OptimizationActivity[] optimizationActivitys) {
        this.optimizationActivitys = optimizationActivitys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optimizationModel")
    public CreativeOptimizationConfigurationOptimizationModelEnum optimizationModel;
    public CreativeOptimizationConfiguration withOptimizationModel(CreativeOptimizationConfigurationOptimizationModelEnum optimizationModel) {
        this.optimizationModel = optimizationModel;
        return this;
    }
}