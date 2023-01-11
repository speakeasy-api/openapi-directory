package openapisdk.models.operations;



public class PostNewRtiJobResponse {
    public String contentType;
    public PostNewRtiJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostNewRtiJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostNewRtiJobResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostNewRtiJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}