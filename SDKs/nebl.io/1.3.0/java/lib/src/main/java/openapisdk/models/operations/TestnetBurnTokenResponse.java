package openapisdk.models.operations;



public class TestnetBurnTokenResponse {
    public String contentType;
    public TestnetBurnTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetBurnTokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetBurnTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BurnTokenResponse burnTokenResponse;
    public TestnetBurnTokenResponse withBurnTokenResponse(openapisdk.models.shared.BurnTokenResponse burnTokenResponse) {
        this.burnTokenResponse = burnTokenResponse;
        return this;
    }
}