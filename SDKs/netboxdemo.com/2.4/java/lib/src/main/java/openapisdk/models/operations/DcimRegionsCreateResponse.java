package openapisdk.models.operations;



public class DcimRegionsCreateResponse {
    public String contentType;
    public DcimRegionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Region region;
    public DcimRegionsCreateResponse withRegion(openapisdk.models.shared.Region region) {
        this.region = region;
        return this;
    }
    public Long statusCode;
    public DcimRegionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}