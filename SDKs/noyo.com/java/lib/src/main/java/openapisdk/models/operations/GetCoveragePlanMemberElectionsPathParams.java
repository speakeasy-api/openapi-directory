package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoveragePlanMemberElectionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=plan_id")
    public String planId;
    public GetCoveragePlanMemberElectionsPathParams withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
}