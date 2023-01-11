package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPagesPatchPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pageId")
    public String pageId;
    public BloggerPagesPatchPathParams withPageId(String pageId) {
        this.pageId = pageId;
        return this;
    }
}