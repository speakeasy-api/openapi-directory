package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenameTrackCollectionRequest {
    public RenameTrackCollectionPathParams pathParams;
    public RenameTrackCollectionRequest withPathParams(RenameTrackCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CollectionUpdateRequest request;
    public RenameTrackCollectionRequest withRequest(openapisdk.models.shared.CollectionUpdateRequest request) {
        this.request = request;
        return this;
    }
    public RenameTrackCollectionSecurity security;
    public RenameTrackCollectionRequest withSecurity(RenameTrackCollectionSecurity security) {
        this.security = security;
        return this;
    }
}