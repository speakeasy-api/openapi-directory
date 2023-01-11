package openapisdk.models.operations;



public class SubscriptionsApiCountResponse {
    public String contentType;
    public SubscriptionsApiCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SubscriptionsApiCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subscriptionsApiCount200ApplicationJSONOneOf;
    public SubscriptionsApiCountResponse withSubscriptionsApiCount200ApplicationJsonOneOf(Object subscriptionsApiCount200ApplicationJSONOneOf) {
        this.subscriptionsApiCount200ApplicationJSONOneOf = subscriptionsApiCount200ApplicationJSONOneOf;
        return this;
    }
}