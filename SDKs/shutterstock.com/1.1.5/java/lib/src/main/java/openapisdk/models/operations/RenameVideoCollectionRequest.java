package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenameVideoCollectionRequest {
    public RenameVideoCollectionPathParams pathParams;
    public RenameVideoCollectionRequest withPathParams(RenameVideoCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionUpdateRequest request;
    public RenameVideoCollectionRequest withRequest(openapisdk.models.shared.CollectionUpdateRequest request) {
        this.request = request;
        return this;
    }
    public RenameVideoCollectionSecurity security;
    public RenameVideoCollectionRequest withSecurity(RenameVideoCollectionSecurity security) {
        this.security = security;
        return this;
    }
}