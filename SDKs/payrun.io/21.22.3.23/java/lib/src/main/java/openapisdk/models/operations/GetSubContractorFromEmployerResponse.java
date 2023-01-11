package openapisdk.models.operations;



public class GetSubContractorFromEmployerResponse {
    public String contentType;
    public GetSubContractorFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetSubContractorFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetSubContractorFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubContractor subContractor;
    public GetSubContractorFromEmployerResponse withSubContractor(openapisdk.models.shared.SubContractor subContractor) {
        this.subContractor = subContractor;
        return this;
    }
}