package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLocationRuleRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationRuleUpdate request;
    public AddLocationRuleRequest withRequest(openapisdk.models.shared.LocationRuleUpdate request) {
        this.request = request;
        return this;
    }
}