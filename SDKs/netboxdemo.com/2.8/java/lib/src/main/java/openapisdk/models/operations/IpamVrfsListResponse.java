package openapisdk.models.operations;



public class IpamVrfsListResponse {
    public String contentType;
    public IpamVrfsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVrfsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamVrfsList200ApplicationJson ipamVrfsList200ApplicationJSONObject;
    public IpamVrfsListResponse withIpamVrfsList200ApplicationJsonObject(IpamVrfsList200ApplicationJson ipamVrfsList200ApplicationJSONObject) {
        this.ipamVrfsList200ApplicationJSONObject = ipamVrfsList200ApplicationJSONObject;
        return this;
    }
}