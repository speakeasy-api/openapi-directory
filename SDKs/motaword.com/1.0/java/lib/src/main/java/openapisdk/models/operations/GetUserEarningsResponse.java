package openapisdk.models.operations;



public class GetUserEarningsResponse {
    public String contentType;
    public GetUserEarningsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Earnings earnings;
    public GetUserEarningsResponse withEarnings(openapisdk.models.shared.Earnings earnings) {
        this.earnings = earnings;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUserEarningsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUserEarningsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}