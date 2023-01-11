package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceTrafficShapingRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultRulesEnabled")
    public Boolean defaultRulesEnabled;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBody withDefaultRulesEnabled(Boolean defaultRulesEnabled) {
        this.defaultRulesEnabled = defaultRulesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[] rules;
    public UpdateNetworkApplianceTrafficShapingRulesRequestBody withRules(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}