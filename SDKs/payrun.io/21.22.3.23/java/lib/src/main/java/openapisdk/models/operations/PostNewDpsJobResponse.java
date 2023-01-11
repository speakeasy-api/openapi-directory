package openapisdk.models.operations;



public class PostNewDpsJobResponse {
    public String contentType;
    public PostNewDpsJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostNewDpsJobResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostNewDpsJobResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostNewDpsJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}