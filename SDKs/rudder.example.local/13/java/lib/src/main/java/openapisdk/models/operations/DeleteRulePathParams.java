package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;
    public DeleteRulePathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}