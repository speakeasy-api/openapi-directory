package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerPostsUpdatePathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=postId")
    public String postId;
    public BloggerPostsUpdatePathParams withPostId(String postId) {
        this.postId = postId;
        return this;
    }
}