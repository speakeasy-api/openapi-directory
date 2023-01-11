package openapisdk.models.operations;



public class GetRtiJobProgressResponse {
    public String contentType;
    public GetRtiJobProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetRtiJobProgressResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetRtiJobProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}