package openapisdk.models.operations;



public class DcimRegionsReadResponse {
    public String contentType;
    public DcimRegionsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Region region;
    public DcimRegionsReadResponse withRegion(openapisdk.models.shared.Region region) {
        this.region = region;
        return this;
    }
    public Long statusCode;
    public DcimRegionsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}