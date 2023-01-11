package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetBurnTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BurnTokenRequest request;
    public TestnetBurnTokenRequest withRequest(openapisdk.models.shared.BurnTokenRequest request) {
        this.request = request;
        return this;
    }
}