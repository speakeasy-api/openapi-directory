package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneVerifyRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PhoneVerifyRequestBody request;
    public PhoneVerifyRequest withRequest(PhoneVerifyRequestBody request) {
        this.request = request;
        return this;
    }
}