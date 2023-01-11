package openapisdk.models.operations;



public class GetInsuranceBalanceResponse {
    public String contentType;
    public GetInsuranceBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInsuranceBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetInsuranceBalanceResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetInsuranceBalanceResponseBody getInsuranceBalanceResponseBody;
    public GetInsuranceBalanceResponse withGetInsuranceBalanceResponseBody(openapisdk.models.shared.GetInsuranceBalanceResponseBody getInsuranceBalanceResponseBody) {
        this.getInsuranceBalanceResponseBody = getInsuranceBalanceResponseBody;
        return this;
    }
}