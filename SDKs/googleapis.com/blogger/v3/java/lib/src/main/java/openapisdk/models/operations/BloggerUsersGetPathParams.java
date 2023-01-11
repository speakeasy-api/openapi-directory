package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerUsersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public BloggerUsersGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}