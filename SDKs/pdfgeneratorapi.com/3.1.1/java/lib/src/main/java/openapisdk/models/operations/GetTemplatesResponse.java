package openapisdk.models.operations;



public class GetTemplatesResponse {
    public String contentType;
    public GetTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTemplates200ApplicationJson getTemplates200ApplicationJSONObject;
    public GetTemplatesResponse withGetTemplates200ApplicationJsonObject(GetTemplates200ApplicationJson getTemplates200ApplicationJSONObject) {
        this.getTemplates200ApplicationJSONObject = getTemplates200ApplicationJSONObject;
        return this;
    }
    public GetTemplates401ApplicationJson getTemplates401ApplicationJSONObject;
    public GetTemplatesResponse withGetTemplates401ApplicationJsonObject(GetTemplates401ApplicationJson getTemplates401ApplicationJSONObject) {
        this.getTemplates401ApplicationJSONObject = getTemplates401ApplicationJSONObject;
        return this;
    }
    public GetTemplates403ApplicationJson getTemplates403ApplicationJSONObject;
    public GetTemplatesResponse withGetTemplates403ApplicationJsonObject(GetTemplates403ApplicationJson getTemplates403ApplicationJSONObject) {
        this.getTemplates403ApplicationJSONObject = getTemplates403ApplicationJSONObject;
        return this;
    }
    public GetTemplates404ApplicationJson getTemplates404ApplicationJSONObject;
    public GetTemplatesResponse withGetTemplates404ApplicationJsonObject(GetTemplates404ApplicationJson getTemplates404ApplicationJSONObject) {
        this.getTemplates404ApplicationJSONObject = getTemplates404ApplicationJSONObject;
        return this;
    }
    public GetTemplates422ApplicationJson getTemplates422ApplicationJSONObject;
    public GetTemplatesResponse withGetTemplates422ApplicationJsonObject(GetTemplates422ApplicationJson getTemplates422ApplicationJSONObject) {
        this.getTemplates422ApplicationJSONObject = getTemplates422ApplicationJSONObject;
        return this;
    }
    public GetTemplates500ApplicationJson getTemplates500ApplicationJSONObject;
    public GetTemplatesResponse withGetTemplates500ApplicationJsonObject(GetTemplates500ApplicationJson getTemplates500ApplicationJSONObject) {
        this.getTemplates500ApplicationJSONObject = getTemplates500ApplicationJSONObject;
        return this;
    }
}