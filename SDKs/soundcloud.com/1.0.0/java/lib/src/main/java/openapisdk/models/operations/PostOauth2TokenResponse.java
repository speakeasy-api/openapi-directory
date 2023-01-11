package openapisdk.models.operations;



public class PostOauth2TokenResponse {
    public String contentType;
    public PostOauth2TokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostOauth2TokenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostOauth2TokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object postOauth2Token400ApplicationJSONOneOf;
    public PostOauth2TokenResponse withPostOauth2Token400ApplicationJsonOneOf(Object postOauth2Token400ApplicationJSONOneOf) {
        this.postOauth2Token400ApplicationJSONOneOf = postOauth2Token400ApplicationJSONOneOf;
        return this;
    }
}