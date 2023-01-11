package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditCoveragePlanRequest {
    public EditCoveragePlanPathParams pathParams;
    public EditCoveragePlanRequest withPathParams(EditCoveragePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CoveragePlanEditRequest request;
    public EditCoveragePlanRequest withRequest(openapisdk.models.shared.CoveragePlanEditRequest request) {
        this.request = request;
        return this;
    }
}