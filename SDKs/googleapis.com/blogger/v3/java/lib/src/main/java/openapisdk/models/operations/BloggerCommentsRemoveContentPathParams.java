package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerCommentsRemoveContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blogId")
    public String blogId;
    public BloggerCommentsRemoveContentPathParams withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commentId")
    public String commentId;
    public BloggerCommentsRemoveContentPathParams withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=postId")
    public String postId;
    public BloggerCommentsRemoveContentPathParams withPostId(String postId) {
        this.postId = postId;
        return this;
    }
}