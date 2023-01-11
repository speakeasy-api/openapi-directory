package openapisdk.models.operations;



public class GetInlineScriptTagsResponse {
    public String contentType;
    public GetInlineScriptTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInlineScriptTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetInlineScriptTags200ApplicationJson getInlineScriptTags200ApplicationJSONObject;
    public GetInlineScriptTagsResponse withGetInlineScriptTags200ApplicationJsonObject(GetInlineScriptTags200ApplicationJson getInlineScriptTags200ApplicationJSONObject) {
        this.getInlineScriptTags200ApplicationJSONObject = getInlineScriptTags200ApplicationJSONObject;
        return this;
    }
}