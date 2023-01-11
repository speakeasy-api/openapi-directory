package openapisdk.models.operations;



public class DcimInterfaceConnectionsListResponse {
    public String contentType;
    public DcimInterfaceConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimInterfaceConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimInterfaceConnectionsList200ApplicationJson dcimInterfaceConnectionsList200ApplicationJSONObject;
    public DcimInterfaceConnectionsListResponse withDcimInterfaceConnectionsList200ApplicationJsonObject(DcimInterfaceConnectionsList200ApplicationJson dcimInterfaceConnectionsList200ApplicationJSONObject) {
        this.dcimInterfaceConnectionsList200ApplicationJSONObject = dcimInterfaceConnectionsList200ApplicationJSONObject;
        return this;
    }
}