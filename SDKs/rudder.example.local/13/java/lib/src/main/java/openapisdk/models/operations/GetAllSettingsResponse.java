package openapisdk.models.operations;



public class GetAllSettingsResponse {
    public String contentType;
    public GetAllSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAllSettings200ApplicationJson getAllSettings200ApplicationJSONObject;
    public GetAllSettingsResponse withGetAllSettings200ApplicationJsonObject(GetAllSettings200ApplicationJson getAllSettings200ApplicationJSONObject) {
        this.getAllSettings200ApplicationJSONObject = getAllSettings200ApplicationJSONObject;
        return this;
    }
}