package openapisdk.models.operations;



public class SubscriptionsApiFindResponse {
    public String contentType;
    public SubscriptionsApiFindResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SubscriptionsApiFindResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subscriptionsApiFind200ApplicationJSONOneOf;
    public SubscriptionsApiFindResponse withSubscriptionsApiFind200ApplicationJsonOneOf(Object subscriptionsApiFind200ApplicationJSONOneOf) {
        this.subscriptionsApiFind200ApplicationJSONOneOf = subscriptionsApiFind200ApplicationJSONOneOf;
        return this;
    }
}