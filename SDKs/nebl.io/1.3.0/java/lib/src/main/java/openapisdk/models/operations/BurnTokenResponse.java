package openapisdk.models.operations;



public class BurnTokenResponse {
    public String contentType;
    public BurnTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public BurnTokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public BurnTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BurnTokenResponse burnTokenResponse;
    public BurnTokenResponse withBurnTokenResponse(openapisdk.models.shared.BurnTokenResponse burnTokenResponse) {
        this.burnTokenResponse = burnTokenResponse;
        return this;
    }
}