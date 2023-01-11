package openapisdk.models.operations;



public class IpamPrefixesUpdateResponse {
    public String contentType;
    public IpamPrefixesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Prefix prefix;
    public IpamPrefixesUpdateResponse withPrefix(openapisdk.models.shared.Prefix prefix) {
        this.prefix = prefix;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}