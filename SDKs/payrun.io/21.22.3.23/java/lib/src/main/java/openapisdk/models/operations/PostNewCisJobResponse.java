package openapisdk.models.operations;



public class PostNewCisJobResponse {
    public String contentType;
    public PostNewCisJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostNewCisJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostNewCisJobResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostNewCisJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}