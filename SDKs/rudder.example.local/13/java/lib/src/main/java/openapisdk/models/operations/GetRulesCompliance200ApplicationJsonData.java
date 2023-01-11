package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRulesCompliance200ApplicationJsonData {
    @JsonProperty("rules")
    public GetRulesCompliance200ApplicationJsonDataRules[] rules;
    public GetRulesCompliance200ApplicationJsonData withRules(GetRulesCompliance200ApplicationJsonDataRules[] rules) {
        this.rules = rules;
        return this;
    }
}