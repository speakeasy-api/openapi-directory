package openapisdk.models.operations;



public class DcimFrontPortsListResponse {
    public String contentType;
    public DcimFrontPortsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimFrontPortsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimFrontPortsList200ApplicationJson dcimFrontPortsList200ApplicationJSONObject;
    public DcimFrontPortsListResponse withDcimFrontPortsList200ApplicationJsonObject(DcimFrontPortsList200ApplicationJson dcimFrontPortsList200ApplicationJSONObject) {
        this.dcimFrontPortsList200ApplicationJSONObject = dcimFrontPortsList200ApplicationJSONObject;
        return this;
    }
}