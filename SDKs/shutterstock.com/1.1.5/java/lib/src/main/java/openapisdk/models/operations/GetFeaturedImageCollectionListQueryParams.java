package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturedImageCollectionListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_hint")
    public GetFeaturedImageCollectionListAssetHintEnum assetHint;
    public GetFeaturedImageCollectionListQueryParams withAssetHint(GetFeaturedImageCollectionListAssetHintEnum assetHint) {
        this.assetHint = assetHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetFeaturedImageCollectionListEmbedEnum embed;
    public GetFeaturedImageCollectionListQueryParams withEmbed(GetFeaturedImageCollectionListEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetFeaturedImageCollectionListTypeEnum[] type;
    public GetFeaturedImageCollectionListQueryParams withType(GetFeaturedImageCollectionListTypeEnum[] type) {
        this.type = type;
        return this;
    }
}