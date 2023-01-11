package openapisdk.models.operations;



public class CreateScriptTagResponse {
    public String contentType;
    public CreateScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateScriptTag200ApplicationJson createScriptTag200ApplicationJSONObject;
    public CreateScriptTagResponse withCreateScriptTag200ApplicationJsonObject(CreateScriptTag200ApplicationJson createScriptTag200ApplicationJSONObject) {
        this.createScriptTag200ApplicationJSONObject = createScriptTag200ApplicationJSONObject;
        return this;
    }
}