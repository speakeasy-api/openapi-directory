package openapisdk.models.operations;



public class IpamAggregatesListResponse {
    public String contentType;
    public IpamAggregatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamAggregatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamAggregatesList200ApplicationJson ipamAggregatesList200ApplicationJSONObject;
    public IpamAggregatesListResponse withIpamAggregatesList200ApplicationJsonObject(IpamAggregatesList200ApplicationJson ipamAggregatesList200ApplicationJSONObject) {
        this.ipamAggregatesList200ApplicationJSONObject = ipamAggregatesList200ApplicationJSONObject;
        return this;
    }
}