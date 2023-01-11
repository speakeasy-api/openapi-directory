package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRuleCategoryRequest {
    public UpdateRuleCategoryPathParams pathParams;
    public UpdateRuleCategoryRequest withPathParams(UpdateRuleCategoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RuleCategoryUpdate request;
    public UpdateRuleCategoryRequest withRequest(openapisdk.models.shared.RuleCategoryUpdate request) {
        this.request = request;
        return this;
    }
}