package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowsWebchannelsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetUserFollowsWebchannelsEmbedEnum embed;
    public GetUserFollowsWebchannelsQueryParams withEmbed(GetUserFollowsWebchannelsEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}