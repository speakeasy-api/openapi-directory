package openapisdk.models.operations;



public class CreatePaymentsResponse {
    public String contentType;
    public CreatePaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatePaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallPayments apiV2010AccountCallPayments;
    public CreatePaymentsResponse withApiV2010AccountCallPayments(openapisdk.models.shared.ApiV2010AccountCallPayments apiV2010AccountCallPayments) {
        this.apiV2010AccountCallPayments = apiV2010AccountCallPayments;
        return this;
    }
}