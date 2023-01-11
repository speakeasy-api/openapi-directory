package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollaboratorsPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CollaboratorsPostRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}