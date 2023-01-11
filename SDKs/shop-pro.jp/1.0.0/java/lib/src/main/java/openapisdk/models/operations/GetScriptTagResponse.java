package openapisdk.models.operations;



public class GetScriptTagResponse {
    public String contentType;
    public GetScriptTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetScriptTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetScriptTag200ApplicationJson getScriptTag200ApplicationJSONObject;
    public GetScriptTagResponse withGetScriptTag200ApplicationJsonObject(GetScriptTag200ApplicationJson getScriptTag200ApplicationJSONObject) {
        this.getScriptTag200ApplicationJSONObject = getScriptTag200ApplicationJSONObject;
        return this;
    }
}