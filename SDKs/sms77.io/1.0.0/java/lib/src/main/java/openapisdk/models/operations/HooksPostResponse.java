package openapisdk.models.operations;



public class HooksPostResponse {
    public String contentType;
    public HooksPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public HooksPost200ApplicationJson hooksPOST200ApplicationJSONObject;
    public HooksPostResponse withHooksPost200ApplicationJsonObject(HooksPost200ApplicationJson hooksPOST200ApplicationJSONObject) {
        this.hooksPOST200ApplicationJSONObject = hooksPOST200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public HooksPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}