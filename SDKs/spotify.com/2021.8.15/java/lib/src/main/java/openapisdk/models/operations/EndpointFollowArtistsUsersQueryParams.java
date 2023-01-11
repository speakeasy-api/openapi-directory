package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointFollowArtistsUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointFollowArtistsUsersQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public EndpointFollowArtistsUsersQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}