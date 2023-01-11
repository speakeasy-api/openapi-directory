package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPagesDeletePathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pageId")
    public String pageId;
    public BloggerPagesDeletePathParams withPageId(String pageId) {
        this.pageId = pageId;
        return this;
    }
}