package openapisdk.models.operations;



public class GetCustomersResponse {
    public String contentType;
    public GetCustomersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCustomersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCustomersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCustomers302ApplicationJson getCustomers302ApplicationJSONObject;
    public GetCustomersResponse withGetCustomers302ApplicationJsonObject(GetCustomers302ApplicationJson getCustomers302ApplicationJSONObject) {
        this.getCustomers302ApplicationJSONObject = getCustomers302ApplicationJSONObject;
        return this;
    }
}