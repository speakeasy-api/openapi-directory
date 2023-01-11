package openapisdk.models.operations;



public class DeclineChangeRequestResponse {
    public String contentType;
    public DeclineChangeRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeclineChangeRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeclineChangeRequest200ApplicationJson declineChangeRequest200ApplicationJSONObject;
    public DeclineChangeRequestResponse withDeclineChangeRequest200ApplicationJsonObject(DeclineChangeRequest200ApplicationJson declineChangeRequest200ApplicationJSONObject) {
        this.declineChangeRequest200ApplicationJSONObject = declineChangeRequest200ApplicationJSONObject;
        return this;
    }
}