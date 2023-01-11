package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerCommentsListByBlogPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerCommentsListByBlogPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
}