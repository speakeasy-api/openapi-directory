package openapisdk.models.operations;



public class SubscriptionsApiSaveResponse {
    public String contentType;
    public SubscriptionsApiSaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SubscriptionsApiSaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subscriptionsApiSave201ApplicationJSONOneOf;
    public SubscriptionsApiSaveResponse withSubscriptionsApiSave201ApplicationJsonOneOf(Object subscriptionsApiSave201ApplicationJSONOneOf) {
        this.subscriptionsApiSave201ApplicationJSONOneOf = subscriptionsApiSave201ApplicationJSONOneOf;
        return this;
    }
}