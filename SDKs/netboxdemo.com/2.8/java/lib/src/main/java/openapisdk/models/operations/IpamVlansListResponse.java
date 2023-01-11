package openapisdk.models.operations;



public class IpamVlansListResponse {
    public String contentType;
    public IpamVlansListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlansListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamVlansList200ApplicationJson ipamVlansList200ApplicationJSONObject;
    public IpamVlansListResponse withIpamVlansList200ApplicationJsonObject(IpamVlansList200ApplicationJson ipamVlansList200ApplicationJSONObject) {
        this.ipamVlansList200ApplicationJSONObject = ipamVlansList200ApplicationJSONObject;
        return this;
    }
}