package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturedVideoCollectionListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetFeaturedVideoCollectionListEmbedEnum embed;
    public GetFeaturedVideoCollectionListQueryParams withEmbed(GetFeaturedVideoCollectionListEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}