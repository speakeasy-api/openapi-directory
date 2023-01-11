package openapisdk.models.operations;



public class DcimRegionsListResponse {
    public String contentType;
    public DcimRegionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimRegionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimRegionsList200ApplicationJson dcimRegionsList200ApplicationJSONObject;
    public DcimRegionsListResponse withDcimRegionsList200ApplicationJsonObject(DcimRegionsList200ApplicationJson dcimRegionsList200ApplicationJSONObject) {
        this.dcimRegionsList200ApplicationJSONObject = dcimRegionsList200ApplicationJSONObject;
        return this;
    }
}