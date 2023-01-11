package openapisdk.models.operations;



public class IpamPrefixesListResponse {
    public String contentType;
    public IpamPrefixesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamPrefixesList200ApplicationJson ipamPrefixesList200ApplicationJSONObject;
    public IpamPrefixesListResponse withIpamPrefixesList200ApplicationJsonObject(IpamPrefixesList200ApplicationJson ipamPrefixesList200ApplicationJSONObject) {
        this.ipamPrefixesList200ApplicationJSONObject = ipamPrefixesList200ApplicationJSONObject;
        return this;
    }
}