package openapisdk.models.operations;



public class IpamVlanGroupsListResponse {
    public String contentType;
    public IpamVlanGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlanGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamVlanGroupsList200ApplicationJson ipamVlanGroupsList200ApplicationJSONObject;
    public IpamVlanGroupsListResponse withIpamVlanGroupsList200ApplicationJsonObject(IpamVlanGroupsList200ApplicationJson ipamVlanGroupsList200ApplicationJSONObject) {
        this.ipamVlanGroupsList200ApplicationJSONObject = ipamVlanGroupsList200ApplicationJSONObject;
        return this;
    }
}