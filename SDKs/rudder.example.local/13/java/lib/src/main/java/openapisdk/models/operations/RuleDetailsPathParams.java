package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RuleDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;
    public RuleDetailsPathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}