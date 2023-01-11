package openapisdk.models.operations;



public class CopyTemplateResponse {
    public String contentType;
    public CopyTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CopyTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CopyTemplate200ApplicationJson copyTemplate200ApplicationJSONObject;
    public CopyTemplateResponse withCopyTemplate200ApplicationJsonObject(CopyTemplate200ApplicationJson copyTemplate200ApplicationJSONObject) {
        this.copyTemplate200ApplicationJSONObject = copyTemplate200ApplicationJSONObject;
        return this;
    }
    public CopyTemplate401ApplicationJson copyTemplate401ApplicationJSONObject;
    public CopyTemplateResponse withCopyTemplate401ApplicationJsonObject(CopyTemplate401ApplicationJson copyTemplate401ApplicationJSONObject) {
        this.copyTemplate401ApplicationJSONObject = copyTemplate401ApplicationJSONObject;
        return this;
    }
    public CopyTemplate403ApplicationJson copyTemplate403ApplicationJSONObject;
    public CopyTemplateResponse withCopyTemplate403ApplicationJsonObject(CopyTemplate403ApplicationJson copyTemplate403ApplicationJSONObject) {
        this.copyTemplate403ApplicationJSONObject = copyTemplate403ApplicationJSONObject;
        return this;
    }
    public CopyTemplate404ApplicationJson copyTemplate404ApplicationJSONObject;
    public CopyTemplateResponse withCopyTemplate404ApplicationJsonObject(CopyTemplate404ApplicationJson copyTemplate404ApplicationJSONObject) {
        this.copyTemplate404ApplicationJSONObject = copyTemplate404ApplicationJSONObject;
        return this;
    }
    public CopyTemplate422ApplicationJson copyTemplate422ApplicationJSONObject;
    public CopyTemplateResponse withCopyTemplate422ApplicationJsonObject(CopyTemplate422ApplicationJson copyTemplate422ApplicationJSONObject) {
        this.copyTemplate422ApplicationJSONObject = copyTemplate422ApplicationJSONObject;
        return this;
    }
    public CopyTemplate500ApplicationJson copyTemplate500ApplicationJSONObject;
    public CopyTemplateResponse withCopyTemplate500ApplicationJsonObject(CopyTemplate500ApplicationJson copyTemplate500ApplicationJSONObject) {
        this.copyTemplate500ApplicationJSONObject = copyTemplate500ApplicationJSONObject;
        return this;
    }
}