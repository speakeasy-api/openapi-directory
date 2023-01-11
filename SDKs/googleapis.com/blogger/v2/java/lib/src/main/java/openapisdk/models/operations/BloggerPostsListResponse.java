package openapisdk.models.operations;



public class BloggerPostsListResponse {
    public String contentType;
    public BloggerPostsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostList postList;
    public BloggerPostsListResponse withPostList(openapisdk.models.shared.PostList postList) {
        this.postList = postList;
        return this;
    }
    public Long statusCode;
    public BloggerPostsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}