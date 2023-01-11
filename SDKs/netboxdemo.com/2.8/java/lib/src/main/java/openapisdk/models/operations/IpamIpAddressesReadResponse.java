package openapisdk.models.operations;



public class IpamIpAddressesReadResponse {
    public String contentType;
    public IpamIpAddressesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAddress ipAddress;
    public IpamIpAddressesReadResponse withIpAddress(openapisdk.models.shared.IpAddress ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    public Long statusCode;
    public IpamIpAddressesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}