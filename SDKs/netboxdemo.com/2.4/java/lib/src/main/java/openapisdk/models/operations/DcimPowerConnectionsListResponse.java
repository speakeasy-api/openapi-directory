package openapisdk.models.operations;



public class DcimPowerConnectionsListResponse {
    public String contentType;
    public DcimPowerConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimPowerConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimPowerConnectionsList200ApplicationJson dcimPowerConnectionsList200ApplicationJSONObject;
    public DcimPowerConnectionsListResponse withDcimPowerConnectionsList200ApplicationJsonObject(DcimPowerConnectionsList200ApplicationJson dcimPowerConnectionsList200ApplicationJSONObject) {
        this.dcimPowerConnectionsList200ApplicationJSONObject = dcimPowerConnectionsList200ApplicationJSONObject;
        return this;
    }
}