package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BroadcastTxRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BroadcastTxRequest request;
    public BroadcastTxRequest withRequest(openapisdk.models.shared.BroadcastTxRequest request) {
        this.request = request;
        return this;
    }
}