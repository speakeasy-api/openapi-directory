package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPostsInsertPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
}