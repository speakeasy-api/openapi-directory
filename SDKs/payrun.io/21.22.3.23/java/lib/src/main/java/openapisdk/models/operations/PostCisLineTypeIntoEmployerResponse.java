package openapisdk.models.operations;



public class PostCisLineTypeIntoEmployerResponse {
    public String contentType;
    public PostCisLineTypeIntoEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostCisLineTypeIntoEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostCisLineTypeIntoEmployerResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostCisLineTypeIntoEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}