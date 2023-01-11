package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdPlaylistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Long userId;
    public GetUsersUserIdPlaylistsPathParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}