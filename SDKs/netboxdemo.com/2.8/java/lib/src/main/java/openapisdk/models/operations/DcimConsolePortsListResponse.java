package openapisdk.models.operations;



public class DcimConsolePortsListResponse {
    public String contentType;
    public DcimConsolePortsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsolePortsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimConsolePortsList200ApplicationJson dcimConsolePortsList200ApplicationJSONObject;
    public DcimConsolePortsListResponse withDcimConsolePortsList200ApplicationJsonObject(DcimConsolePortsList200ApplicationJson dcimConsolePortsList200ApplicationJSONObject) {
        this.dcimConsolePortsList200ApplicationJSONObject = dcimConsolePortsList200ApplicationJSONObject;
        return this;
    }
}