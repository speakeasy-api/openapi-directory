package openapisdk.models.operations;



public class UpdatePaymentsResponse {
    public String contentType;
    public UpdatePaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallPayments apiV2010AccountCallPayments;
    public UpdatePaymentsResponse withApiV2010AccountCallPayments(openapisdk.models.shared.ApiV2010AccountCallPayments apiV2010AccountCallPayments) {
        this.apiV2010AccountCallPayments = apiV2010AccountCallPayments;
        return this;
    }
}