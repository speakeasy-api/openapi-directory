package openapisdk.models.operations;



public class IpamPrefixesAvailablePrefixesCreateResponse {
    public String contentType;
    public IpamPrefixesAvailablePrefixesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Prefix prefix;
    public IpamPrefixesAvailablePrefixesCreateResponse withPrefix(openapisdk.models.shared.Prefix prefix) {
        this.prefix = prefix;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesAvailablePrefixesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}