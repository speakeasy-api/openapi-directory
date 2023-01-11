package openapisdk.models.operations;



public class GetOwnedNumbersResponse {
    public byte[] body;
    public GetOwnedNumbersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetOwnedNumbersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOwnedNumbersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountUnauthorized accountUnauthorized;
    public GetOwnedNumbersResponse withAccountUnauthorized(openapisdk.models.shared.AccountUnauthorized accountUnauthorized) {
        this.accountUnauthorized = accountUnauthorized;
        return this;
    }
    public openapisdk.models.shared.InboundNumbers inboundNumbers;
    public GetOwnedNumbersResponse withInboundNumbers(openapisdk.models.shared.InboundNumbers inboundNumbers) {
        this.inboundNumbers = inboundNumbers;
        return this;
    }
}