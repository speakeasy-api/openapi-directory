package openapisdk.models.operations;



public class GetSubContractorRevisionByNumberResponse {
    public String contentType;
    public GetSubContractorRevisionByNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetSubContractorRevisionByNumberResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetSubContractorRevisionByNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubContractor subContractor;
    public GetSubContractorRevisionByNumberResponse withSubContractor(openapisdk.models.shared.SubContractor subContractor) {
        this.subContractor = subContractor;
        return this;
    }
}