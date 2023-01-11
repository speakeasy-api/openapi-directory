package openapisdk.models.operations;



public class DcimConsoleConnectionsListResponse {
    public String contentType;
    public DcimConsoleConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimConsoleConnectionsList200ApplicationJson dcimConsoleConnectionsList200ApplicationJSONObject;
    public DcimConsoleConnectionsListResponse withDcimConsoleConnectionsList200ApplicationJsonObject(DcimConsoleConnectionsList200ApplicationJson dcimConsoleConnectionsList200ApplicationJSONObject) {
        this.dcimConsoleConnectionsList200ApplicationJSONObject = dcimConsoleConnectionsList200ApplicationJSONObject;
        return this;
    }
}