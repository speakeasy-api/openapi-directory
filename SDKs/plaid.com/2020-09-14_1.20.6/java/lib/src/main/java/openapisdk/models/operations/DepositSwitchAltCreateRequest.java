package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DepositSwitchAltCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DepositSwitchAltCreateRequest request;
    public DepositSwitchAltCreateRequest withRequest(openapisdk.models.shared.DepositSwitchAltCreateRequest request) {
        this.request = request;
        return this;
    }
}