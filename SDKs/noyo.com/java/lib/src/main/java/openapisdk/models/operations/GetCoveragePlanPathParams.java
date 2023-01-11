package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoveragePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=plan_id")
    public String planId;
    public GetCoveragePlanPathParams withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
}