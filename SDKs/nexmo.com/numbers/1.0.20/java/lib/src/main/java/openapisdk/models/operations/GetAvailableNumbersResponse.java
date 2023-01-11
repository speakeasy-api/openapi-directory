package openapisdk.models.operations;



public class GetAvailableNumbersResponse {
    public byte[] body;
    public GetAvailableNumbersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAvailableNumbersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAvailableNumbersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountUnauthorized accountUnauthorized;
    public GetAvailableNumbersResponse withAccountUnauthorized(openapisdk.models.shared.AccountUnauthorized accountUnauthorized) {
        this.accountUnauthorized = accountUnauthorized;
        return this;
    }
    public openapisdk.models.shared.AvailableNumbers availableNumbers;
    public GetAvailableNumbersResponse withAvailableNumbers(openapisdk.models.shared.AvailableNumbers availableNumbers) {
        this.availableNumbers = availableNumbers;
        return this;
    }
}