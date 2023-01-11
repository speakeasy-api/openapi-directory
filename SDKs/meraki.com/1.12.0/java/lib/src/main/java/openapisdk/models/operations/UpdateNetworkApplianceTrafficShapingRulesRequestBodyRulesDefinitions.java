package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions {
    @JsonProperty("type")
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum type;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions withType(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions withValue(String value) {
        this.value = value;
        return this;
    }
}