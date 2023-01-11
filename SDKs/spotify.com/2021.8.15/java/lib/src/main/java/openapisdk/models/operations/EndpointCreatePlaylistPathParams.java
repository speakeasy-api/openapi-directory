package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCreatePlaylistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public EndpointCreatePlaylistPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}