package openapisdk.models.operations;



public class PatchSubContractorResponse {
    public String contentType;
    public PatchSubContractorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchSubContractorResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PatchSubContractorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubContractor subContractor;
    public PatchSubContractorResponse withSubContractor(openapisdk.models.shared.SubContractor subContractor) {
        this.subContractor = subContractor;
        return this;
    }
}