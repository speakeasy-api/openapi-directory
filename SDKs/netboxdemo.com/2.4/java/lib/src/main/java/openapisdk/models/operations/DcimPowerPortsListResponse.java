package openapisdk.models.operations;



public class DcimPowerPortsListResponse {
    public String contentType;
    public DcimPowerPortsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimPowerPortsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimPowerPortsList200ApplicationJson dcimPowerPortsList200ApplicationJSONObject;
    public DcimPowerPortsListResponse withDcimPowerPortsList200ApplicationJsonObject(DcimPowerPortsList200ApplicationJson dcimPowerPortsList200ApplicationJSONObject) {
        this.dcimPowerPortsList200ApplicationJSONObject = dcimPowerPortsList200ApplicationJSONObject;
        return this;
    }
}