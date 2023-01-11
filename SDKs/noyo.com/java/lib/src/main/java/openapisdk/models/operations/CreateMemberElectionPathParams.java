package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMemberElectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=plan_id")
    public String planId;
    public CreateMemberElectionPathParams withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
}