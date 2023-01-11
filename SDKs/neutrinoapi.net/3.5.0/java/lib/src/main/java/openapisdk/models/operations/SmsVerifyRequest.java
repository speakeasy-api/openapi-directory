package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmsVerifyRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public SmsVerifyRequestBody request;
    public SmsVerifyRequest withRequest(SmsVerifyRequestBody request) {
        this.request = request;
        return this;
    }
}