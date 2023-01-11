package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleCompliance200ApplicationJsonDataRules {
    @JsonProperty("compliance")
    public Float compliance;
    public GetRuleCompliance200ApplicationJsonDataRules withCompliance(Float compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonProperty("complianceDetails")
    public GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails complianceDetails;
    public GetRuleCompliance200ApplicationJsonDataRules withComplianceDetails(GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails complianceDetails) {
        this.complianceDetails = complianceDetails;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GetRuleCompliance200ApplicationJsonDataRules withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("mode")
    public GetRuleCompliance200ApplicationJsonDataRulesModeEnum mode;
    public GetRuleCompliance200ApplicationJsonDataRules withMode(GetRuleCompliance200ApplicationJsonDataRulesModeEnum mode) {
        this.mode = mode;
        return this;
    }
}