package openapisdk.models.operations;



public class DcimDeviceBaysListResponse {
    public String contentType;
    public DcimDeviceBaysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimDeviceBaysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimDeviceBaysList200ApplicationJson dcimDeviceBaysList200ApplicationJSONObject;
    public DcimDeviceBaysListResponse withDcimDeviceBaysList200ApplicationJsonObject(DcimDeviceBaysList200ApplicationJson dcimDeviceBaysList200ApplicationJSONObject) {
        this.dcimDeviceBaysList200ApplicationJSONObject = dcimDeviceBaysList200ApplicationJSONObject;
        return this;
    }
}