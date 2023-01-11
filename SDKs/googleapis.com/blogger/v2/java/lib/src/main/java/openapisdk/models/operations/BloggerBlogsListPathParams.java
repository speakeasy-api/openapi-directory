package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerBlogsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public BloggerBlogsListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}