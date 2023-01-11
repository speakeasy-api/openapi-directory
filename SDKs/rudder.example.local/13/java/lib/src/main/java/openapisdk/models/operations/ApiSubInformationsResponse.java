package openapisdk.models.operations;



public class ApiSubInformationsResponse {
    public String contentType;
    public ApiSubInformationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiSubInformationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ApiSubInformations200ApplicationJson apiSubInformations200ApplicationJSONObject;
    public ApiSubInformationsResponse withApiSubInformations200ApplicationJsonObject(ApiSubInformations200ApplicationJson apiSubInformations200ApplicationJSONObject) {
        this.apiSubInformations200ApplicationJSONObject = apiSubInformations200ApplicationJSONObject;
        return this;
    }
}