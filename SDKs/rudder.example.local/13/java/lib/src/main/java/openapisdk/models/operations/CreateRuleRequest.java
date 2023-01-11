package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRuleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RuleNew request;
    public CreateRuleRequest withRequest(openapisdk.models.shared.RuleNew request) {
        this.request = request;
        return this;
    }
}