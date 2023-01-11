package openapisdk.models.operations;



public class OrdersResponse {
    public String contentType;
    public OrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String orders200ApplicationJSONString;
    public OrdersResponse withOrders200ApplicationJsonString(String orders200ApplicationJSONString) {
        this.orders200ApplicationJSONString = orders200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public OrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}