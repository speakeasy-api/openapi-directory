package openapisdk.models.operations;



public class UpdateChangeRequestResponse {
    public String contentType;
    public UpdateChangeRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateChangeRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateChangeRequest200ApplicationJson updateChangeRequest200ApplicationJSONObject;
    public UpdateChangeRequestResponse withUpdateChangeRequest200ApplicationJsonObject(UpdateChangeRequest200ApplicationJson updateChangeRequest200ApplicationJSONObject) {
        this.updateChangeRequest200ApplicationJSONObject = updateChangeRequest200ApplicationJSONObject;
        return this;
    }
}