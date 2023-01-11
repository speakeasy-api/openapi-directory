package openapisdk.models.operations;



public class GetSettingResponse {
    public String contentType;
    public GetSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSetting200ApplicationJson getSetting200ApplicationJSONObject;
    public GetSettingResponse withGetSetting200ApplicationJsonObject(GetSetting200ApplicationJson getSetting200ApplicationJSONObject) {
        this.getSetting200ApplicationJSONObject = getSetting200ApplicationJSONObject;
        return this;
    }
}