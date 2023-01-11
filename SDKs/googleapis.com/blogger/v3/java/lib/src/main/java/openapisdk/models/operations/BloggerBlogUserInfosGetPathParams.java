package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerBlogUserInfosGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerBlogUserInfosGetPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public BloggerBlogUserInfosGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}