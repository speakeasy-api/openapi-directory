package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendTxRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTxRequest request;
    public SendTxRequest withRequest(openapisdk.models.shared.SendTxRequest request) {
        this.request = request;
        return this;
    }
}