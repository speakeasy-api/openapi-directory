package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturedImageCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_hint")
    public GetFeaturedImageCollectionAssetHintEnum assetHint;
    public GetFeaturedImageCollectionQueryParams withAssetHint(GetFeaturedImageCollectionAssetHintEnum assetHint) {
        this.assetHint = assetHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetFeaturedImageCollectionEmbedEnum embed;
    public GetFeaturedImageCollectionQueryParams withEmbed(GetFeaturedImageCollectionEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}