package openapisdk.models.operations;



public class IpamIpAddressesCreateResponse {
    public String contentType;
    public IpamIpAddressesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAddress ipAddress;
    public IpamIpAddressesCreateResponse withIpAddress(openapisdk.models.shared.IpAddress ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    public Long statusCode;
    public IpamIpAddressesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}