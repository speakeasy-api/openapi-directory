package openapisdk.models.operations;



public class GetEventsForSubscriptionByIdResponse {
    public String contentType;
    public GetEventsForSubscriptionByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEventsForSubscriptionByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetEventsForSubscriptionById200ApplicationJson getEventsForSubscriptionById200ApplicationJSONObject;
    public GetEventsForSubscriptionByIdResponse withGetEventsForSubscriptionById200ApplicationJsonObject(GetEventsForSubscriptionById200ApplicationJson getEventsForSubscriptionById200ApplicationJSONObject) {
        this.getEventsForSubscriptionById200ApplicationJSONObject = getEventsForSubscriptionById200ApplicationJSONObject;
        return this;
    }
}