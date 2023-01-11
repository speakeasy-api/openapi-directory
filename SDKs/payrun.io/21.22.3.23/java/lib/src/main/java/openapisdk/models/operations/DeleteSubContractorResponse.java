package openapisdk.models.operations;



public class DeleteSubContractorResponse {
    public String contentType;
    public DeleteSubContractorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public DeleteSubContractorResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public DeleteSubContractorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}