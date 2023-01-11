package openapisdk.models.operations;



public class ModifySettingResponse {
    public String contentType;
    public ModifySettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ModifySettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ModifySetting200ApplicationJson modifySetting200ApplicationJSONObject;
    public ModifySettingResponse withModifySetting200ApplicationJsonObject(ModifySetting200ApplicationJson modifySetting200ApplicationJSONObject) {
        this.modifySetting200ApplicationJSONObject = modifySetting200ApplicationJSONObject;
        return this;
    }
}