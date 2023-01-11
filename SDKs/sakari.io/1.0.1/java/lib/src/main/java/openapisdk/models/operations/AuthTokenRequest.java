package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TokenRequest request;
    public AuthTokenRequest withRequest(openapisdk.models.shared.TokenRequest request) {
        this.request = request;
        return this;
    }
}