package openapisdk.models.operations;



public class DcimRackGroupsListResponse {
    public String contentType;
    public DcimRackGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimRackGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimRackGroupsList200ApplicationJson dcimRackGroupsList200ApplicationJSONObject;
    public DcimRackGroupsListResponse withDcimRackGroupsList200ApplicationJsonObject(DcimRackGroupsList200ApplicationJson dcimRackGroupsList200ApplicationJSONObject) {
        this.dcimRackGroupsList200ApplicationJSONObject = dcimRackGroupsList200ApplicationJSONObject;
        return this;
    }
}