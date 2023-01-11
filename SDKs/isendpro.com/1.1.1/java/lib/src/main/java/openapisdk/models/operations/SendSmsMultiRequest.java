package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendSmsMultiRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SmsRequest request;
    public SendSmsMultiRequest withRequest(openapisdk.models.shared.SmsRequest request) {
        this.request = request;
        return this;
    }
}