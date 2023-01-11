package openapisdk.models.operations;



public class RedactMessageResponse {
    public String contentType;
    public RedactMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorInvalidId errorInvalidId;
    public RedactMessageResponse withErrorInvalidId(openapisdk.models.shared.ErrorInvalidId errorInvalidId) {
        this.errorInvalidId = errorInvalidId;
        return this;
    }
    public openapisdk.models.shared.ErrorThrottled errorThrottled;
    public RedactMessageResponse withErrorThrottled(openapisdk.models.shared.ErrorThrottled errorThrottled) {
        this.errorThrottled = errorThrottled;
        return this;
    }
    public openapisdk.models.shared.ErrorUnauthorized errorUnauthorized;
    public RedactMessageResponse withErrorUnauthorized(openapisdk.models.shared.ErrorUnauthorized errorUnauthorized) {
        this.errorUnauthorized = errorUnauthorized;
        return this;
    }
    public Long statusCode;
    public RedactMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object redactMessage403ApplicationJSONOneOf;
    public RedactMessageResponse withRedactMessage403ApplicationJsonOneOf(Object redactMessage403ApplicationJSONOneOf) {
        this.redactMessage403ApplicationJSONOneOf = redactMessage403ApplicationJSONOneOf;
        return this;
    }
    public Object redactMessage422ApplicationJSONOneOf;
    public RedactMessageResponse withRedactMessage422ApplicationJsonOneOf(Object redactMessage422ApplicationJSONOneOf) {
        this.redactMessage422ApplicationJSONOneOf = redactMessage422ApplicationJSONOneOf;
        return this;
    }
}