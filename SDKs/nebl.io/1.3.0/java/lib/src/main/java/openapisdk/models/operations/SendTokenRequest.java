package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTokenRequest request;
    public SendTokenRequest withRequest(openapisdk.models.shared.SendTokenRequest request) {
        this.request = request;
        return this;
    }
}