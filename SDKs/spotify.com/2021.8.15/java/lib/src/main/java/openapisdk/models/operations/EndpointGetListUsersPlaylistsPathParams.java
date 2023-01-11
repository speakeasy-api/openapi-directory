package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetListUsersPlaylistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public EndpointGetListUsersPlaylistsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}