package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckIfUserFollowsPlaylistQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointCheckIfUserFollowsPlaylistQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
}