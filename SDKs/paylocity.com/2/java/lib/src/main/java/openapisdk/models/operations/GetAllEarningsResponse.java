package openapisdk.models.operations;



public class GetAllEarningsResponse {
    public String contentType;
    public GetAllEarningsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllEarningsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Earning[] earnings;
    public GetAllEarningsResponse withEarnings(openapisdk.models.shared.Earning[] earnings) {
        this.earnings = earnings;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetAllEarningsResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}