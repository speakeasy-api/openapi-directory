package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendSmsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SmsUniqueRequest request;
    public SendSmsRequest withRequest(openapisdk.models.shared.SmsUniqueRequest request) {
        this.request = request;
        return this;
    }
}