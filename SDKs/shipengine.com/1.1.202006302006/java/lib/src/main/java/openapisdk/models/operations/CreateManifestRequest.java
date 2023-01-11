package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateManifestRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateManifestRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}