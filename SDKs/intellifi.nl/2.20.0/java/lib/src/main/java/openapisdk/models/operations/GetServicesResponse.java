package openapisdk.models.operations;



public class GetServicesResponse {
    public String contentType;
    public GetServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetServices200ApplicationJson getServices200ApplicationJSONObject;
    public GetServicesResponse withGetServices200ApplicationJsonObject(GetServices200ApplicationJson getServices200ApplicationJSONObject) {
        this.getServices200ApplicationJSONObject = getServices200ApplicationJSONObject;
        return this;
    }
}