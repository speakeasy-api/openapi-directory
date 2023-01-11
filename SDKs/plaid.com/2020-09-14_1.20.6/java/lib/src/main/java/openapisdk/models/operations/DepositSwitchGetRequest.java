package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepositSwitchGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DepositSwitchGetRequest request;
    public DepositSwitchGetRequest withRequest(openapisdk.models.shared.DepositSwitchGetRequest request) {
        this.request = request;
        return this;
    }
}