package openapisdk.models.operations;



public class GetCisJobProgressResponse {
    public String contentType;
    public GetCisJobProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetCisJobProgressResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetCisJobProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}