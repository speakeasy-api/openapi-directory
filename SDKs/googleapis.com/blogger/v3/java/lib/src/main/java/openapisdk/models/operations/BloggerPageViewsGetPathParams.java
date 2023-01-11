package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPageViewsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPageViewsGetPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
}