package openapisdk.models.operations;



public class BloggerPostsPatchResponse {
    public String contentType;
    public BloggerPostsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Post post;
    public BloggerPostsPatchResponse withPost(openapisdk.models.shared.Post post) {
        this.post = post;
        return this;
    }
    public Long statusCode;
    public BloggerPostsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}