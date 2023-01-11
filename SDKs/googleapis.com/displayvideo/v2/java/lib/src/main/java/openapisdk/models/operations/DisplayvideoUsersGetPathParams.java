package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoUsersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DisplayvideoUsersGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}