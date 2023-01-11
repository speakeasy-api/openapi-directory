package openapisdk.models.operations;



public class BloggerPostsSearchResponse {
    public String contentType;
    public BloggerPostsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostList postList;
    public BloggerPostsSearchResponse withPostList(openapisdk.models.shared.PostList postList) {
        this.postList = postList;
        return this;
    }
    public Long statusCode;
    public BloggerPostsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}