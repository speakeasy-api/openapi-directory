package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetSendTxRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTxRequest request;
    public TestnetSendTxRequest withRequest(openapisdk.models.shared.SendTxRequest request) {
        this.request = request;
        return this;
    }
}