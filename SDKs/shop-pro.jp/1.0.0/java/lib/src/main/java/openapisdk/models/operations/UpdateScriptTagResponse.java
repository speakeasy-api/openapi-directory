package openapisdk.models.operations;



public class UpdateScriptTagResponse {
    public String contentType;
    public UpdateScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateScriptTag200ApplicationJson updateScriptTag200ApplicationJSONObject;
    public UpdateScriptTagResponse withUpdateScriptTag200ApplicationJsonObject(UpdateScriptTag200ApplicationJson updateScriptTag200ApplicationJSONObject) {
        this.updateScriptTag200ApplicationJSONObject = updateScriptTag200ApplicationJSONObject;
        return this;
    }
}