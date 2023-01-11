package openapisdk.models.operations;



public class IpamIpAddressesPartialUpdateResponse {
    public String contentType;
    public IpamIpAddressesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAddress ipAddress;
    public IpamIpAddressesPartialUpdateResponse withIpAddress(openapisdk.models.shared.IpAddress ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    public Long statusCode;
    public IpamIpAddressesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}