package openapisdk.models.operations;



public class GetCustomerResponse {
    public String contentType;
    public GetCustomerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCustomerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCustomer200ApplicationJson getCustomer200ApplicationJSONObject;
    public GetCustomerResponse withGetCustomer200ApplicationJsonObject(GetCustomer200ApplicationJson getCustomer200ApplicationJSONObject) {
        this.getCustomer200ApplicationJSONObject = getCustomer200ApplicationJSONObject;
        return this;
    }
}