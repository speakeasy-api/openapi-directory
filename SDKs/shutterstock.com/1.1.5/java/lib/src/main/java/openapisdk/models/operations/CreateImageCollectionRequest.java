package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateImageCollectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionCreateRequest request;
    public CreateImageCollectionRequest withRequest(openapisdk.models.shared.CollectionCreateRequest request) {
        this.request = request;
        return this;
    }
    public CreateImageCollectionSecurity security;
    public CreateImageCollectionRequest withSecurity(CreateImageCollectionSecurity security) {
        this.security = security;
        return this;
    }
}