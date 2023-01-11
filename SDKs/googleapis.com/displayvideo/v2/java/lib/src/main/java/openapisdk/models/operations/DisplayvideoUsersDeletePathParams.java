package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoUsersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DisplayvideoUsersDeletePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}