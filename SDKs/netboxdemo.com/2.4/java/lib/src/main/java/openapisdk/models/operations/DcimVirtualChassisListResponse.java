package openapisdk.models.operations;



public class DcimVirtualChassisListResponse {
    public String contentType;
    public DcimVirtualChassisListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimVirtualChassisListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimVirtualChassisList200ApplicationJson dcimVirtualChassisList200ApplicationJSONObject;
    public DcimVirtualChassisListResponse withDcimVirtualChassisList200ApplicationJsonObject(DcimVirtualChassisList200ApplicationJson dcimVirtualChassisList200ApplicationJSONObject) {
        this.dcimVirtualChassisList200ApplicationJSONObject = dcimVirtualChassisList200ApplicationJSONObject;
        return this;
    }
}