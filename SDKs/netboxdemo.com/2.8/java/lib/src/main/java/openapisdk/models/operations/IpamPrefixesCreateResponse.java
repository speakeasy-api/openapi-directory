package openapisdk.models.operations;



public class IpamPrefixesCreateResponse {
    public String contentType;
    public IpamPrefixesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Prefix prefix;
    public IpamPrefixesCreateResponse withPrefix(openapisdk.models.shared.Prefix prefix) {
        this.prefix = prefix;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}