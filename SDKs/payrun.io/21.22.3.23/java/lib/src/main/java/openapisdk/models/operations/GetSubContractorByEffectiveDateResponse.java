package openapisdk.models.operations;



public class GetSubContractorByEffectiveDateResponse {
    public String contentType;
    public GetSubContractorByEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetSubContractorByEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetSubContractorByEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubContractor subContractor;
    public GetSubContractorByEffectiveDateResponse withSubContractor(openapisdk.models.shared.SubContractor subContractor) {
        this.subContractor = subContractor;
        return this;
    }
}