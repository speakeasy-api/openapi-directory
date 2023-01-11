package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserTagsTagIdShowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetUserTagsTagIdShowsEmbedEnum embed;
    public GetUserTagsTagIdShowsQueryParams withEmbed(GetUserTagsTagIdShowsEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}