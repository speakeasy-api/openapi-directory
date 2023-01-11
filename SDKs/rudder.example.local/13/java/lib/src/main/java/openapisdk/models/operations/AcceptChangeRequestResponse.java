package openapisdk.models.operations;



public class AcceptChangeRequestResponse {
    public String contentType;
    public AcceptChangeRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AcceptChangeRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AcceptChangeRequest200ApplicationJson acceptChangeRequest200ApplicationJSONObject;
    public AcceptChangeRequestResponse withAcceptChangeRequest200ApplicationJsonObject(AcceptChangeRequest200ApplicationJson acceptChangeRequest200ApplicationJSONObject) {
        this.acceptChangeRequest200ApplicationJSONObject = acceptChangeRequest200ApplicationJSONObject;
        return this;
    }
}