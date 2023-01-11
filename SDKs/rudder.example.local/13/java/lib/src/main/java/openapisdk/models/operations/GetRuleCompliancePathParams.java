package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRuleCompliancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public String ruleId;
    public GetRuleCompliancePathParams withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}