package openapisdk.models.operations;



public class PostNominalCodeResponse {
    public String contentType;
    public PostNominalCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostNominalCodeResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostNominalCodeResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostNominalCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}