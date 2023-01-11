package openapisdk.models.operations;



public class PostCisInstructionIntoSubContractorResponse {
    public String contentType;
    public PostCisInstructionIntoSubContractorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PostCisInstructionIntoSubContractorResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Link link;
    public PostCisInstructionIntoSubContractorResponse withLink(openapisdk.models.shared.Link link) {
        this.link = link;
        return this;
    }
    public Long statusCode;
    public PostCisInstructionIntoSubContractorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}