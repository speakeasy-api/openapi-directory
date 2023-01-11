package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowsShowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetUserFollowsShowsEmbedEnum embed;
    public GetUserFollowsShowsQueryParams withEmbed(GetUserFollowsShowsEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}