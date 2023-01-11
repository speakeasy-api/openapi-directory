package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLocationRuleRequest {
    public UpdateLocationRulePathParams pathParams;
    public UpdateLocationRuleRequest withPathParams(UpdateLocationRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationRuleUpdate request;
    public UpdateLocationRuleRequest withRequest(openapisdk.models.shared.LocationRuleUpdate request) {
        this.request = request;
        return this;
    }
}