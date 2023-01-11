package openapisdk.models.operations;



public class DcimRackRolesListResponse {
    public String contentType;
    public DcimRackRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DcimRackRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DcimRackRolesList200ApplicationJson dcimRackRolesList200ApplicationJSONObject;
    public DcimRackRolesListResponse withDcimRackRolesList200ApplicationJsonObject(DcimRackRolesList200ApplicationJson dcimRackRolesList200ApplicationJSONObject) {
        this.dcimRackRolesList200ApplicationJSONObject = dcimRackRolesList200ApplicationJSONObject;
        return this;
    }
}