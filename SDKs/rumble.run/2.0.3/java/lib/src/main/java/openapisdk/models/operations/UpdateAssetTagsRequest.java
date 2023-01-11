package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetTagsRequest {
    public UpdateAssetTagsPathParams pathParams;
    public UpdateAssetTagsRequest withPathParams(UpdateAssetTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetTags request;
    public UpdateAssetTagsRequest withRequest(openapisdk.models.shared.AssetTags request) {
        this.request = request;
        return this;
    }
    public UpdateAssetTagsSecurity security;
    public UpdateAssetTagsRequest withSecurity(UpdateAssetTagsSecurity security) {
        this.security = security;
        return this;
    }
}