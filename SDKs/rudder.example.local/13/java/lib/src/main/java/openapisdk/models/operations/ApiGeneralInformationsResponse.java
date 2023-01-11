package openapisdk.models.operations;



public class ApiGeneralInformationsResponse {
    public String contentType;
    public ApiGeneralInformationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiGeneralInformationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ApiGeneralInformations200ApplicationJson apiGeneralInformations200ApplicationJSONObject;
    public ApiGeneralInformationsResponse withApiGeneralInformations200ApplicationJsonObject(ApiGeneralInformations200ApplicationJson apiGeneralInformations200ApplicationJSONObject) {
        this.apiGeneralInformations200ApplicationJSONObject = apiGeneralInformations200ApplicationJSONObject;
        return this;
    }
}