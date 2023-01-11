package openapisdk.models.operations;



public class IpamRolesListResponse {
    public String contentType;
    public IpamRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamRolesList200ApplicationJson ipamRolesList200ApplicationJSONObject;
    public IpamRolesListResponse withIpamRolesList200ApplicationJsonObject(IpamRolesList200ApplicationJson ipamRolesList200ApplicationJSONObject) {
        this.ipamRolesList200ApplicationJSONObject = ipamRolesList200ApplicationJSONObject;
        return this;
    }
}