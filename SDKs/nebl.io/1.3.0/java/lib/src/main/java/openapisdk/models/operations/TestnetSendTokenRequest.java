package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetSendTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTokenRequest request;
    public TestnetSendTokenRequest withRequest(openapisdk.models.shared.SendTokenRequest request) {
        this.request = request;
        return this;
    }
}