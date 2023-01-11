package openapisdk.models.operations;



public class CheckDirectiveResponse {
    public String contentType;
    public CheckDirectiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckDirectiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CheckDirective200ApplicationJson checkDirective200ApplicationJSONObject;
    public CheckDirectiveResponse withCheckDirective200ApplicationJsonObject(CheckDirective200ApplicationJson checkDirective200ApplicationJSONObject) {
        this.checkDirective200ApplicationJSONObject = checkDirective200ApplicationJSONObject;
        return this;
    }
}