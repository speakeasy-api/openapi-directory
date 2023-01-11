package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmsMessageRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public SmsMessageRequestBody request;
    public SmsMessageRequest withRequest(SmsMessageRequestBody request) {
        this.request = request;
        return this;
    }
}