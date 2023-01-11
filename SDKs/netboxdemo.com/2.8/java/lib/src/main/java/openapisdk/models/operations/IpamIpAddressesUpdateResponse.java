package openapisdk.models.operations;



public class IpamIpAddressesUpdateResponse {
    public String contentType;
    public IpamIpAddressesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAddress ipAddress;
    public IpamIpAddressesUpdateResponse withIpAddress(openapisdk.models.shared.IpAddress ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    public Long statusCode;
    public IpamIpAddressesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}