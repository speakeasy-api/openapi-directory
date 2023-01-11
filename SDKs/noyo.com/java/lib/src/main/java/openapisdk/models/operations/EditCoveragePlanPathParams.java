package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditCoveragePlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=plan_id")
    public String planId;
    public EditCoveragePlanPathParams withPlanId(String planId) {
        this.planId = planId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditCoveragePlanPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}