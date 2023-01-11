package openapisdk.models.operations;



public class TemplatesRemoveResponse {
    public String contentType;
    public TemplatesRemoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TemplatesRemoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TemplatesRemove200ApplicationJson templatesRemove200ApplicationJSONObject;
    public TemplatesRemoveResponse withTemplatesRemove200ApplicationJsonObject(TemplatesRemove200ApplicationJson templatesRemove200ApplicationJSONObject) {
        this.templatesRemove200ApplicationJSONObject = templatesRemove200ApplicationJSONObject;
        return this;
    }
}