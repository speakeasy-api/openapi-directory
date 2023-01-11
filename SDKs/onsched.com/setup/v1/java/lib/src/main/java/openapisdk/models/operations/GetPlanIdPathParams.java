package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlanIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=planId")
    public String planId;
    public GetPlanIdPathParams withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
}