package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturedVideoCollectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetFeaturedVideoCollectionEmbedEnum embed;
    public GetFeaturedVideoCollectionQueryParams withEmbed(GetFeaturedVideoCollectionEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}