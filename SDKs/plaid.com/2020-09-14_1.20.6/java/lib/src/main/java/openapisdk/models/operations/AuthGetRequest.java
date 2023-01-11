package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthGetRequest request;
    public AuthGetRequest withRequest(openapisdk.models.shared.AuthGetRequest request) {
        this.request = request;
        return this;
    }
}