package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRulesCompliance200ApplicationJsonDataRules {
    @JsonProperty("compliance")
    public Float compliance;
    public GetRulesCompliance200ApplicationJsonDataRules withCompliance(Float compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonProperty("complianceDetails")
    public GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails complianceDetails;
    public GetRulesCompliance200ApplicationJsonDataRules withComplianceDetails(GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails complianceDetails) {
        this.complianceDetails = complianceDetails;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GetRulesCompliance200ApplicationJsonDataRules withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("mode")
    public GetRulesCompliance200ApplicationJsonDataRulesModeEnum mode;
    public GetRulesCompliance200ApplicationJsonDataRules withMode(GetRulesCompliance200ApplicationJsonDataRulesModeEnum mode) {
        this.mode = mode;
        return this;
    }
}