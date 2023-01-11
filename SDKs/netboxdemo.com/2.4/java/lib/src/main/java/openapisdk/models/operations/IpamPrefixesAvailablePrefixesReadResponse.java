package openapisdk.models.operations;



public class IpamPrefixesAvailablePrefixesReadResponse {
    public String contentType;
    public IpamPrefixesAvailablePrefixesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Prefix prefix;
    public IpamPrefixesAvailablePrefixesReadResponse withPrefix(openapisdk.models.shared.Prefix prefix) {
        this.prefix = prefix;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesAvailablePrefixesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}