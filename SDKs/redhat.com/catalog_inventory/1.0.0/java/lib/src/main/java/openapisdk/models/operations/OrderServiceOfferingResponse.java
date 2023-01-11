package openapisdk.models.operations;



public class OrderServiceOfferingResponse {
    public String contentType;
    public OrderServiceOfferingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrderServiceOfferingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public OrderServiceOffering200ApplicationJson orderServiceOffering200ApplicationJSONObject;
    public OrderServiceOfferingResponse withOrderServiceOffering200ApplicationJsonObject(OrderServiceOffering200ApplicationJson orderServiceOffering200ApplicationJSONObject) {
        this.orderServiceOffering200ApplicationJSONObject = orderServiceOffering200ApplicationJSONObject;
        return this;
    }
}