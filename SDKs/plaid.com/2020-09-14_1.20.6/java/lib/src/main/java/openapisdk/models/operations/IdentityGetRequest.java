package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentityGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentityGetRequest request;
    public IdentityGetRequest withRequest(openapisdk.models.shared.IdentityGetRequest request) {
        this.request = request;
        return this;
    }
}