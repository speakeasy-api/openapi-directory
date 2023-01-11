package openapisdk.models.operations;



public class GetInlineScriptTagResponse {
    public String contentType;
    public GetInlineScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInlineScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetInlineScriptTag200ApplicationJson getInlineScriptTag200ApplicationJSONObject;
    public GetInlineScriptTagResponse withGetInlineScriptTag200ApplicationJsonObject(GetInlineScriptTag200ApplicationJson getInlineScriptTag200ApplicationJSONObject) {
        this.getInlineScriptTag200ApplicationJSONObject = getInlineScriptTag200ApplicationJSONObject;
        return this;
    }
}