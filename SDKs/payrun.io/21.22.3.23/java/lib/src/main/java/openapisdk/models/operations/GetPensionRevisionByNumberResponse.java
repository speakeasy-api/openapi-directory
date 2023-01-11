package openapisdk.models.operations;



public class GetPensionRevisionByNumberResponse {
    public String contentType;
    public GetPensionRevisionByNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPensionRevisionByNumberResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.Pension pension;
    public GetPensionRevisionByNumberResponse withPension(openapisdk.models.shared.Pension pension) {
        this.pension = pension;
        return this;
    }
    public Long statusCode;
    public GetPensionRevisionByNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}