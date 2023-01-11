package openapisdk.models.operations;



public class IpamPrefixesAvailableIpsCreateResponse {
    public String contentType;
    public IpamPrefixesAvailableIpsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Prefix prefix;
    public IpamPrefixesAvailableIpsCreateResponse withPrefix(openapisdk.models.shared.Prefix prefix) {
        this.prefix = prefix;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesAvailableIpsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}