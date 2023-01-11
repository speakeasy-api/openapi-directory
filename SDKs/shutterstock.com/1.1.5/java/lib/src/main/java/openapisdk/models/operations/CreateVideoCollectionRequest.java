package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVideoCollectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionCreateRequest request;
    public CreateVideoCollectionRequest withRequest(openapisdk.models.shared.CollectionCreateRequest request) {
        this.request = request;
        return this;
    }
    public CreateVideoCollectionSecurity security;
    public CreateVideoCollectionRequest withSecurity(CreateVideoCollectionSecurity security) {
        this.security = security;
        return this;
    }
}