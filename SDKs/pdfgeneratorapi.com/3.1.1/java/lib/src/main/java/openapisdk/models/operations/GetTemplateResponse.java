package openapisdk.models.operations;



public class GetTemplateResponse {
    public String contentType;
    public GetTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTemplate200ApplicationJson getTemplate200ApplicationJSONObject;
    public GetTemplateResponse withGetTemplate200ApplicationJsonObject(GetTemplate200ApplicationJson getTemplate200ApplicationJSONObject) {
        this.getTemplate200ApplicationJSONObject = getTemplate200ApplicationJSONObject;
        return this;
    }
    public GetTemplate401ApplicationJson getTemplate401ApplicationJSONObject;
    public GetTemplateResponse withGetTemplate401ApplicationJsonObject(GetTemplate401ApplicationJson getTemplate401ApplicationJSONObject) {
        this.getTemplate401ApplicationJSONObject = getTemplate401ApplicationJSONObject;
        return this;
    }
    public GetTemplate403ApplicationJson getTemplate403ApplicationJSONObject;
    public GetTemplateResponse withGetTemplate403ApplicationJsonObject(GetTemplate403ApplicationJson getTemplate403ApplicationJSONObject) {
        this.getTemplate403ApplicationJSONObject = getTemplate403ApplicationJSONObject;
        return this;
    }
    public GetTemplate404ApplicationJson getTemplate404ApplicationJSONObject;
    public GetTemplateResponse withGetTemplate404ApplicationJsonObject(GetTemplate404ApplicationJson getTemplate404ApplicationJSONObject) {
        this.getTemplate404ApplicationJSONObject = getTemplate404ApplicationJSONObject;
        return this;
    }
    public GetTemplate422ApplicationJson getTemplate422ApplicationJSONObject;
    public GetTemplateResponse withGetTemplate422ApplicationJsonObject(GetTemplate422ApplicationJson getTemplate422ApplicationJSONObject) {
        this.getTemplate422ApplicationJSONObject = getTemplate422ApplicationJSONObject;
        return this;
    }
    public GetTemplate500ApplicationJson getTemplate500ApplicationJSONObject;
    public GetTemplateResponse withGetTemplate500ApplicationJsonObject(GetTemplate500ApplicationJson getTemplate500ApplicationJSONObject) {
        this.getTemplate500ApplicationJSONObject = getTemplate500ApplicationJSONObject;
        return this;
    }
}