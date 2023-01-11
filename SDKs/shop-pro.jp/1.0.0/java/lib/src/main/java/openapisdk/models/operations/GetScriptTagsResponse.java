package openapisdk.models.operations;



public class GetScriptTagsResponse {
    public String contentType;
    public GetScriptTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetScriptTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetScriptTags200ApplicationJson getScriptTags200ApplicationJSONObject;
    public GetScriptTagsResponse withGetScriptTags200ApplicationJsonObject(GetScriptTags200ApplicationJson getScriptTags200ApplicationJSONObject) {
        this.getScriptTags200ApplicationJSONObject = getScriptTags200ApplicationJSONObject;
        return this;
    }
}