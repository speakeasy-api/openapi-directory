package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCoveragePlanRequest {
    public CreateCoveragePlanPathParams pathParams;
    public CreateCoveragePlanRequest withPathParams(CreateCoveragePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CoveragePlanCreateRequest request;
    public CreateCoveragePlanRequest withRequest(openapisdk.models.shared.CoveragePlanCreateRequest request) {
        this.request = request;
        return this;
    }
}