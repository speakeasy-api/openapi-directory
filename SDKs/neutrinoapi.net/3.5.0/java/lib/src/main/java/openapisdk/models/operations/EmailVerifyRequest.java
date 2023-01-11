package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmailVerifyRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public EmailVerifyRequestBody request;
    public EmailVerifyRequest withRequest(EmailVerifyRequestBody request) {
        this.request = request;
        return this;
    }
}