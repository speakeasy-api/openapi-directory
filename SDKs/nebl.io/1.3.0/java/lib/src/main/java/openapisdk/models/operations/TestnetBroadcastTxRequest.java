package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetBroadcastTxRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BroadcastTxRequest request;
    public TestnetBroadcastTxRequest withRequest(openapisdk.models.shared.BroadcastTxRequest request) {
        this.request = request;
        return this;
    }
}