package openapisdk.models.operations;



public class PostUserResponse {
    public String contentType;
    public PostUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostUserResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostUserResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}