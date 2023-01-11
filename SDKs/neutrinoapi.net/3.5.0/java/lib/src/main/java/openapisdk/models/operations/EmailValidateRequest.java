package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmailValidateRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public EmailValidateRequestBody request;
    public EmailValidateRequest withRequest(EmailValidateRequestBody request) {
        this.request = request;
        return this;
    }
}