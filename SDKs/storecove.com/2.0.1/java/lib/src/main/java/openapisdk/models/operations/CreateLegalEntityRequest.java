package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLegalEntityRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateLegalEntityRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}