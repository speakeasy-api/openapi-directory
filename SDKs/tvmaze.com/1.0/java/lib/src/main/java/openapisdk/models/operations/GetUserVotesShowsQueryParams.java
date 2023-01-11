package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserVotesShowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetUserVotesShowsEmbedEnum embed;
    public GetUserVotesShowsQueryParams withEmbed(GetUserVotesShowsEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}