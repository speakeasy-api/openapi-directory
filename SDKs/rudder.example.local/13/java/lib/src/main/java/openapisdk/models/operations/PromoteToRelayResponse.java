package openapisdk.models.operations;



public class PromoteToRelayResponse {
    public String contentType;
    public PromoteToRelayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PromoteToRelayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PromoteToRelay200ApplicationJson promoteToRelay200ApplicationJSONObject;
    public PromoteToRelayResponse withPromoteToRelay200ApplicationJsonObject(PromoteToRelay200ApplicationJson promoteToRelay200ApplicationJSONObject) {
        this.promoteToRelay200ApplicationJSONObject = promoteToRelay200ApplicationJSONObject;
        return this;
    }
}