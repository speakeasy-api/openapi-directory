package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRuleCategoryRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RuleCategory request;
    public CreateRuleCategoryRequest withRequest(openapisdk.models.shared.RuleCategory request) {
        this.request = request;
        return this;
    }
}