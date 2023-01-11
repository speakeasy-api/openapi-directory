package openapisdk.models.operations;



public class BloggerPagesPatchResponse {
    public String contentType;
    public BloggerPagesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Page page;
    public BloggerPagesPatchResponse withPage(openapisdk.models.shared.Page page) {
        this.page = page;
        return this;
    }
    public Long statusCode;
    public BloggerPagesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}