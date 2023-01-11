package openapisdk.models.operations;



public class IpamPrefixesAvailableIpsCreateResponse {
    public openapisdk.models.shared.AvailableIp[] availableIPS;
    public IpamPrefixesAvailableIpsCreateResponse withAvailableIps(openapisdk.models.shared.AvailableIp[] availableIPS) {
        this.availableIPS = availableIPS;
        return this;
    }
    public String contentType;
    public IpamPrefixesAvailableIpsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesAvailableIpsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}