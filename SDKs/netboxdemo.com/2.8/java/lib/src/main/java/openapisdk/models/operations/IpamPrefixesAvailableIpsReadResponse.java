package openapisdk.models.operations;



public class IpamPrefixesAvailableIpsReadResponse {
    public openapisdk.models.shared.AvailableIp[] availableIPS;
    public IpamPrefixesAvailableIpsReadResponse withAvailableIps(openapisdk.models.shared.AvailableIp[] availableIPS) {
        this.availableIPS = availableIPS;
        return this;
    }
    public String contentType;
    public IpamPrefixesAvailableIpsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesAvailableIpsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}