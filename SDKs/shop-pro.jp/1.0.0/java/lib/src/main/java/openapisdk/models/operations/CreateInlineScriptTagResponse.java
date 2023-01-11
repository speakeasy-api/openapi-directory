package openapisdk.models.operations;



public class CreateInlineScriptTagResponse {
    public String contentType;
    public CreateInlineScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateInlineScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateInlineScriptTag201ApplicationJson createInlineScriptTag201ApplicationJSONObject;
    public CreateInlineScriptTagResponse withCreateInlineScriptTag201ApplicationJsonObject(CreateInlineScriptTag201ApplicationJson createInlineScriptTag201ApplicationJSONObject) {
        this.createInlineScriptTag201ApplicationJSONObject = createInlineScriptTag201ApplicationJSONObject;
        return this;
    }
}