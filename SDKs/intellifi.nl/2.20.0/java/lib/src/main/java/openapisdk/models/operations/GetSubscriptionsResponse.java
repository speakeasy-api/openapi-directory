package openapisdk.models.operations;



public class GetSubscriptionsResponse {
    public String contentType;
    public GetSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSubscriptions200ApplicationJson getSubscriptions200ApplicationJSONObject;
    public GetSubscriptionsResponse withGetSubscriptions200ApplicationJsonObject(GetSubscriptions200ApplicationJson getSubscriptions200ApplicationJSONObject) {
        this.getSubscriptions200ApplicationJSONObject = getSubscriptions200ApplicationJSONObject;
        return this;
    }
}