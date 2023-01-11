package openapisdk.models.operations;



public class DeleteTemplateResponse {
    public String contentType;
    public DeleteTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteTemplate200ApplicationJson deleteTemplate200ApplicationJSONObject;
    public DeleteTemplateResponse withDeleteTemplate200ApplicationJsonObject(DeleteTemplate200ApplicationJson deleteTemplate200ApplicationJSONObject) {
        this.deleteTemplate200ApplicationJSONObject = deleteTemplate200ApplicationJSONObject;
        return this;
    }
    public DeleteTemplate401ApplicationJson deleteTemplate401ApplicationJSONObject;
    public DeleteTemplateResponse withDeleteTemplate401ApplicationJsonObject(DeleteTemplate401ApplicationJson deleteTemplate401ApplicationJSONObject) {
        this.deleteTemplate401ApplicationJSONObject = deleteTemplate401ApplicationJSONObject;
        return this;
    }
    public DeleteTemplate403ApplicationJson deleteTemplate403ApplicationJSONObject;
    public DeleteTemplateResponse withDeleteTemplate403ApplicationJsonObject(DeleteTemplate403ApplicationJson deleteTemplate403ApplicationJSONObject) {
        this.deleteTemplate403ApplicationJSONObject = deleteTemplate403ApplicationJSONObject;
        return this;
    }
    public DeleteTemplate404ApplicationJson deleteTemplate404ApplicationJSONObject;
    public DeleteTemplateResponse withDeleteTemplate404ApplicationJsonObject(DeleteTemplate404ApplicationJson deleteTemplate404ApplicationJSONObject) {
        this.deleteTemplate404ApplicationJSONObject = deleteTemplate404ApplicationJSONObject;
        return this;
    }
    public DeleteTemplate422ApplicationJson deleteTemplate422ApplicationJSONObject;
    public DeleteTemplateResponse withDeleteTemplate422ApplicationJsonObject(DeleteTemplate422ApplicationJson deleteTemplate422ApplicationJSONObject) {
        this.deleteTemplate422ApplicationJSONObject = deleteTemplate422ApplicationJSONObject;
        return this;
    }
    public DeleteTemplate500ApplicationJson deleteTemplate500ApplicationJSONObject;
    public DeleteTemplateResponse withDeleteTemplate500ApplicationJsonObject(DeleteTemplate500ApplicationJson deleteTemplate500ApplicationJSONObject) {
        this.deleteTemplate500ApplicationJSONObject = deleteTemplate500ApplicationJSONObject;
        return this;
    }
}