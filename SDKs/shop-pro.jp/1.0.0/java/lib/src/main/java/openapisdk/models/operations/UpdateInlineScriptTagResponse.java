package openapisdk.models.operations;



public class UpdateInlineScriptTagResponse {
    public String contentType;
    public UpdateInlineScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateInlineScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateInlineScriptTag200ApplicationJson updateInlineScriptTag200ApplicationJSONObject;
    public UpdateInlineScriptTagResponse withUpdateInlineScriptTag200ApplicationJsonObject(UpdateInlineScriptTag200ApplicationJson updateInlineScriptTag200ApplicationJSONObject) {
        this.updateInlineScriptTag200ApplicationJSONObject = updateInlineScriptTag200ApplicationJSONObject;
        return this;
    }
}