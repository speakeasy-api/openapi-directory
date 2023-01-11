package openapisdk.models.operations;



public class AddFundsToCarrierResponse {
    public String contentType;
    public AddFundsToCarrierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddFundsToCarrierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AddFundsToCarrierResponseBody addFundsToCarrierResponseBody;
    public AddFundsToCarrierResponse withAddFundsToCarrierResponseBody(openapisdk.models.shared.AddFundsToCarrierResponseBody addFundsToCarrierResponseBody) {
        this.addFundsToCarrierResponseBody = addFundsToCarrierResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public AddFundsToCarrierResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}