package openapisdk.models.operations;



public class DcimRearPortsListResponse {
    public String contentType;
    public DcimRearPortsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimRearPortsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimRearPortsList200ApplicationJson dcimRearPortsList200ApplicationJSONObject;
    public DcimRearPortsListResponse withDcimRearPortsList200ApplicationJsonObject(DcimRearPortsList200ApplicationJson dcimRearPortsList200ApplicationJSONObject) {
        this.dcimRearPortsList200ApplicationJSONObject = dcimRearPortsList200ApplicationJSONObject;
        return this;
    }
}