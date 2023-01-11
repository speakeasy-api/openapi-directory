package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPagesUpdatePathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pageId")
    public String pageId;
    public BloggerPagesUpdatePathParams withPageId(String pageId) {
        this.pageId = pageId;
        return this;
    }
}