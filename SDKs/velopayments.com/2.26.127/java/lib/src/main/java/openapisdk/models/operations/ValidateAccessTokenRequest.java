package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateAccessTokenRequest {
    public ValidateAccessTokenHeaders headers;
    public ValidateAccessTokenRequest withHeaders(ValidateAccessTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccessTokenValidationRequest request;
    public ValidateAccessTokenRequest withRequest(openapisdk.models.shared.AccessTokenValidationRequest request) {
        this.request = request;
        return this;
    }
}