package openapisdk.models.operations;



public class IpamServicesListResponse {
    public String contentType;
    public IpamServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamServicesList200ApplicationJson ipamServicesList200ApplicationJSONObject;
    public IpamServicesListResponse withIpamServicesList200ApplicationJsonObject(IpamServicesList200ApplicationJson ipamServicesList200ApplicationJSONObject) {
        this.ipamServicesList200ApplicationJSONObject = ipamServicesList200ApplicationJSONObject;
        return this;
    }
}