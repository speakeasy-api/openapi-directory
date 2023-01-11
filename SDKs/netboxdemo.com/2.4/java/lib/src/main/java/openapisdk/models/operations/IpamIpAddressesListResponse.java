package openapisdk.models.operations;



public class IpamIpAddressesListResponse {
    public String contentType;
    public IpamIpAddressesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamIpAddressesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public IpamIpAddressesList200ApplicationJson ipamIpAddressesList200ApplicationJSONObject;
    public IpamIpAddressesListResponse withIpamIpAddressesList200ApplicationJsonObject(IpamIpAddressesList200ApplicationJson ipamIpAddressesList200ApplicationJSONObject) {
        this.ipamIpAddressesList200ApplicationJSONObject = ipamIpAddressesList200ApplicationJSONObject;
        return this;
    }
}