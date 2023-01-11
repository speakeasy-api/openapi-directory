package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointUnfollowArtistsUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointUnfollowArtistsUsersQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public EndpointUnfollowArtistsUsersQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}