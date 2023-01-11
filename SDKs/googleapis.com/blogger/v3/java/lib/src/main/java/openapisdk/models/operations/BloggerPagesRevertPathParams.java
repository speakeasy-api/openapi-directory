package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPagesRevertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPagesRevertPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pageId")
    public String pageId;
    public BloggerPagesRevertPathParams withPageId(String pageId) {
        this.pageId = pageId;
        return this;
    }
}