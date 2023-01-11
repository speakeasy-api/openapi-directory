package openapisdk.models.operations;



public class PostSubContractorIntoEmployerResponse {
    public String contentType;
    public PostSubContractorIntoEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostSubContractorIntoEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostSubContractorIntoEmployerResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostSubContractorIntoEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}