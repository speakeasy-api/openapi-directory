package openapisdk.models.operations;



public class DcimConsoleServerPortsListResponse {
    public String contentType;
    public DcimConsoleServerPortsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimConsoleServerPortsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimConsoleServerPortsList200ApplicationJson dcimConsoleServerPortsList200ApplicationJSONObject;
    public DcimConsoleServerPortsListResponse withDcimConsoleServerPortsList200ApplicationJsonObject(DcimConsoleServerPortsList200ApplicationJson dcimConsoleServerPortsList200ApplicationJSONObject) {
        this.dcimConsoleServerPortsList200ApplicationJSONObject = dcimConsoleServerPortsList200ApplicationJSONObject;
        return this;
    }
}