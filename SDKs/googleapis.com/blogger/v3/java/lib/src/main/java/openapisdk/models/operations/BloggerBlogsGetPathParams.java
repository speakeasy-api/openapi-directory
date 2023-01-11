package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerBlogsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerBlogsGetPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
}