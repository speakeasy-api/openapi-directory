package openapisdk.models.operations;



public class PutSubContractorIntoEmployerResponse {
    public String contentType;
    public PutSubContractorIntoEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutSubContractorIntoEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutSubContractorIntoEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubContractor subContractor;
    public PutSubContractorIntoEmployerResponse withSubContractor(openapisdk.models.shared.SubContractor subContractor) {
        this.subContractor = subContractor;
        return this;
    }
}