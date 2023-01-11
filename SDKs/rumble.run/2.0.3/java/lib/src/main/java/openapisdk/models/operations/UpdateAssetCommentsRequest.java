package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetCommentsRequest {
    public UpdateAssetCommentsPathParams pathParams;
    public UpdateAssetCommentsRequest withPathParams(UpdateAssetCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetComments request;
    public UpdateAssetCommentsRequest withRequest(openapisdk.models.shared.AssetComments request) {
        this.request = request;
        return this;
    }
    public UpdateAssetCommentsSecurity security;
    public UpdateAssetCommentsRequest withSecurity(UpdateAssetCommentsSecurity security) {
        this.security = security;
        return this;
    }
}