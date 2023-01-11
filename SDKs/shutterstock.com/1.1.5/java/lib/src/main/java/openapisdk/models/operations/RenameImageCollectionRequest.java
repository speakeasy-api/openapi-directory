package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenameImageCollectionRequest {
    public RenameImageCollectionPathParams pathParams;
    public RenameImageCollectionRequest withPathParams(RenameImageCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionUpdateRequest request;
    public RenameImageCollectionRequest withRequest(openapisdk.models.shared.CollectionUpdateRequest request) {
        this.request = request;
        return this;
    }
    public RenameImageCollectionSecurity security;
    public RenameImageCollectionRequest withSecurity(RenameImageCollectionSecurity security) {
        this.security = security;
        return this;
    }
}