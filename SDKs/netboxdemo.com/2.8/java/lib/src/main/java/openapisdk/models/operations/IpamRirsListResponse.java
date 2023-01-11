package openapisdk.models.operations;



public class IpamRirsListResponse {
    public String contentType;
    public IpamRirsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamRirsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamRirsList200ApplicationJson ipamRirsList200ApplicationJSONObject;
    public IpamRirsListResponse withIpamRirsList200ApplicationJsonObject(IpamRirsList200ApplicationJson ipamRirsList200ApplicationJSONObject) {
        this.ipamRirsList200ApplicationJSONObject = ipamRirsList200ApplicationJSONObject;
        return this;
    }
}