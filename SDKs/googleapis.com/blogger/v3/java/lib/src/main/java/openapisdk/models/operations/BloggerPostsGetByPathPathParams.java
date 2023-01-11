package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsGetByPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPostsGetByPathPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
}