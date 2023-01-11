package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRuleRequest {
    public UpdateRulePathParams pathParams;
    public UpdateRuleRequest withPathParams(UpdateRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RuleWithCategory request;
    public UpdateRuleRequest withRequest(openapisdk.models.shared.RuleWithCategory request) {
        this.request = request;
        return this;
    }
}