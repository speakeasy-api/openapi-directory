package openapisdk.models.operations;



public class ApiInformationsResponse {
    public String contentType;
    public ApiInformationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiInformationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ApiInformations200ApplicationJson apiInformations200ApplicationJSONObject;
    public ApiInformationsResponse withApiInformations200ApplicationJsonObject(ApiInformations200ApplicationJson apiInformations200ApplicationJSONObject) {
        this.apiInformations200ApplicationJSONObject = apiInformations200ApplicationJSONObject;
        return this;
    }
}