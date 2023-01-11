package openapisdk.models.operations;



public class ListParametersResponse {
    public String contentType;
    public ListParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListParameters200ApplicationJson listParameters200ApplicationJSONObject;
    public ListParametersResponse withListParameters200ApplicationJsonObject(ListParameters200ApplicationJson listParameters200ApplicationJSONObject) {
        this.listParameters200ApplicationJSONObject = listParameters200ApplicationJSONObject;
        return this;
    }
}