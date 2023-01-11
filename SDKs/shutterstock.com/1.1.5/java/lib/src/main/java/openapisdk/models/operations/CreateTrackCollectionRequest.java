package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrackCollectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionCreateRequest request;
    public CreateTrackCollectionRequest withRequest(openapisdk.models.shared.CollectionCreateRequest request) {
        this.request = request;
        return this;
    }
    public CreateTrackCollectionSecurity security;
    public CreateTrackCollectionRequest withSecurity(CreateTrackCollectionSecurity security) {
        this.security = security;
        return this;
    }
}