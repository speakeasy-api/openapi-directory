package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowsNetworksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetUserFollowsNetworksEmbedEnum embed;
    public GetUserFollowsNetworksQueryParams withEmbed(GetUserFollowsNetworksEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
}