package openapisdk.models.operations;



public class CreateTemplateResponse {
    public String contentType;
    public CreateTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateTemplate200ApplicationJson createTemplate200ApplicationJSONObject;
    public CreateTemplateResponse withCreateTemplate200ApplicationJsonObject(CreateTemplate200ApplicationJson createTemplate200ApplicationJSONObject) {
        this.createTemplate200ApplicationJSONObject = createTemplate200ApplicationJSONObject;
        return this;
    }
    public CreateTemplate401ApplicationJson createTemplate401ApplicationJSONObject;
    public CreateTemplateResponse withCreateTemplate401ApplicationJsonObject(CreateTemplate401ApplicationJson createTemplate401ApplicationJSONObject) {
        this.createTemplate401ApplicationJSONObject = createTemplate401ApplicationJSONObject;
        return this;
    }
    public CreateTemplate403ApplicationJson createTemplate403ApplicationJSONObject;
    public CreateTemplateResponse withCreateTemplate403ApplicationJsonObject(CreateTemplate403ApplicationJson createTemplate403ApplicationJSONObject) {
        this.createTemplate403ApplicationJSONObject = createTemplate403ApplicationJSONObject;
        return this;
    }
    public CreateTemplate404ApplicationJson createTemplate404ApplicationJSONObject;
    public CreateTemplateResponse withCreateTemplate404ApplicationJsonObject(CreateTemplate404ApplicationJson createTemplate404ApplicationJSONObject) {
        this.createTemplate404ApplicationJSONObject = createTemplate404ApplicationJSONObject;
        return this;
    }
    public CreateTemplate422ApplicationJson createTemplate422ApplicationJSONObject;
    public CreateTemplateResponse withCreateTemplate422ApplicationJsonObject(CreateTemplate422ApplicationJson createTemplate422ApplicationJSONObject) {
        this.createTemplate422ApplicationJSONObject = createTemplate422ApplicationJSONObject;
        return this;
    }
    public CreateTemplate500ApplicationJson createTemplate500ApplicationJSONObject;
    public CreateTemplateResponse withCreateTemplate500ApplicationJsonObject(CreateTemplate500ApplicationJson createTemplate500ApplicationJSONObject) {
        this.createTemplate500ApplicationJSONObject = createTemplate500ApplicationJSONObject;
        return this;
    }
}