package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepositSwitchCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DepositSwitchCreateRequest request;
    public DepositSwitchCreateRequest withRequest(openapisdk.models.shared.DepositSwitchCreateRequest request) {
        this.request = request;
        return this;
    }
}