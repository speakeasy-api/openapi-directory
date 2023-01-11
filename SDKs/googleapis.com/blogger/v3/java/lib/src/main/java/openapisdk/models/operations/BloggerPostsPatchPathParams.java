package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPostsPatchPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=postId")
    public String postId;
    public BloggerPostsPatchPathParams withPostId(String postId) {
        this.postId = postId;
        return this;
    }
}