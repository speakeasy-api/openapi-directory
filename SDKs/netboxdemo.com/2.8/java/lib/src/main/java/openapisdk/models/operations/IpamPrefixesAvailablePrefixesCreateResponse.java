package openapisdk.models.operations;



public class IpamPrefixesAvailablePrefixesCreateResponse {
    public openapisdk.models.shared.AvailablePrefix[] availablePrefixes;
    public IpamPrefixesAvailablePrefixesCreateResponse withAvailablePrefixes(openapisdk.models.shared.AvailablePrefix[] availablePrefixes) {
        this.availablePrefixes = availablePrefixes;
        return this;
    }
    public String contentType;
    public IpamPrefixesAvailablePrefixesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesAvailablePrefixesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}