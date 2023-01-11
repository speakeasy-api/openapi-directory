package openapisdk.models.operations;



public class AddFundsToInsuranceResponse {
    public String contentType;
    public AddFundsToInsuranceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddFundsToInsuranceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AddFundsToInsuranceResponseBody addFundsToInsuranceResponseBody;
    public AddFundsToInsuranceResponse withAddFundsToInsuranceResponseBody(openapisdk.models.shared.AddFundsToInsuranceResponseBody addFundsToInsuranceResponseBody) {
        this.addFundsToInsuranceResponseBody = addFundsToInsuranceResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public AddFundsToInsuranceResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}