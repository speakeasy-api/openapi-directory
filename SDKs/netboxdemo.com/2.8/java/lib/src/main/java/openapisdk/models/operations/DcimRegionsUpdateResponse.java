package openapisdk.models.operations;



public class DcimRegionsUpdateResponse {
    public String contentType;
    public DcimRegionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Region region;
    public DcimRegionsUpdateResponse withRegion(openapisdk.models.shared.Region region) {
        this.region = region;
        return this;
    }
    public Long statusCode;
    public DcimRegionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}