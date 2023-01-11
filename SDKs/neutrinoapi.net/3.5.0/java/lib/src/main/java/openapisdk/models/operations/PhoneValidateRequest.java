package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneValidateRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PhoneValidateRequestBody request;
    public PhoneValidateRequest withRequest(PhoneValidateRequestBody request) {
        this.request = request;
        return this;
    }
}