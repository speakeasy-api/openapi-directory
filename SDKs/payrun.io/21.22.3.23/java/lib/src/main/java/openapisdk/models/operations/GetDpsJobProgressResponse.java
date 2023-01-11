package openapisdk.models.operations;



public class GetDpsJobProgressResponse {
    public String contentType;
    public GetDpsJobProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetDpsJobProgressResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetDpsJobProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}