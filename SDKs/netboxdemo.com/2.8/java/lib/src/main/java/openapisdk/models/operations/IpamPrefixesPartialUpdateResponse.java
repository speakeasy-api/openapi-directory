package openapisdk.models.operations;



public class IpamPrefixesPartialUpdateResponse {
    public String contentType;
    public IpamPrefixesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Prefix prefix;
    public IpamPrefixesPartialUpdateResponse withPrefix(openapisdk.models.shared.Prefix prefix) {
        this.prefix = prefix;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}