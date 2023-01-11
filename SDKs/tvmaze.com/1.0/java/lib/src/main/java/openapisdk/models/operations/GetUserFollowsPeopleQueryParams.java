package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowsPeopleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetUserFollowsPeopleEmbedEnum embed;
    public GetUserFollowsPeopleQueryParams withEmbed(GetUserFollowsPeopleEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}