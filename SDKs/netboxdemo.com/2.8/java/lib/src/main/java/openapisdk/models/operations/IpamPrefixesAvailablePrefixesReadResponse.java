package openapisdk.models.operations;



public class IpamPrefixesAvailablePrefixesReadResponse {
    public openapisdk.models.shared.AvailablePrefix[] availablePrefixes;
    public IpamPrefixesAvailablePrefixesReadResponse withAvailablePrefixes(openapisdk.models.shared.AvailablePrefix[] availablePrefixes) {
        this.availablePrefixes = availablePrefixes;
        return this;
    }
    public String contentType;
    public IpamPrefixesAvailablePrefixesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamPrefixesAvailablePrefixesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}