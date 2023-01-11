package openapisdk.models.operations;



public class DirectiveDetailsResponse {
    public String contentType;
    public DirectiveDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DirectiveDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DirectiveDetails200ApplicationJson directiveDetails200ApplicationJSONObject;
    public DirectiveDetailsResponse withDirectiveDetails200ApplicationJsonObject(DirectiveDetails200ApplicationJson directiveDetails200ApplicationJSONObject) {
        this.directiveDetails200ApplicationJSONObject = directiveDetails200ApplicationJSONObject;
        return this;
    }
}