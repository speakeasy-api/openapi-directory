package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ValidateRequestBody request;
    public ValidateRequest withRequest(ValidateRequestBody request) {
        this.request = request;
        return this;
    }
}