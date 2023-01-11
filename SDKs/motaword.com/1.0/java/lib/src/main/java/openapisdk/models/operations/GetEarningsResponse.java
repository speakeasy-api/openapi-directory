package openapisdk.models.operations;



public class GetEarningsResponse {
    public String contentType;
    public GetEarningsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Earnings earnings;
    public GetEarningsResponse withEarnings(openapisdk.models.shared.Earnings earnings) {
        this.earnings = earnings;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetEarningsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetEarningsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}