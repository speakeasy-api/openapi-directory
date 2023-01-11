package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepositSwitchTokenCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DepositSwitchTokenCreateRequest request;
    public DepositSwitchTokenCreateRequest withRequest(openapisdk.models.shared.DepositSwitchTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}