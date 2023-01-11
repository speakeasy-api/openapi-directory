package openapisdk.models.operations;



public class AvailableProductsResponse {
    public String contentType;
    public AvailableProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AvailableProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AvailableProducts200ApplicationJson availableProducts200ApplicationJSONObject;
    public AvailableProductsResponse withAvailableProducts200ApplicationJsonObject(AvailableProducts200ApplicationJson availableProducts200ApplicationJSONObject) {
        this.availableProducts200ApplicationJSONObject = availableProducts200ApplicationJSONObject;
        return this;
    }
}