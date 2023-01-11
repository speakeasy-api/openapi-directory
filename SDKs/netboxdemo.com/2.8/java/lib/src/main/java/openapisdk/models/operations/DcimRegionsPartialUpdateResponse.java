package openapisdk.models.operations;



public class DcimRegionsPartialUpdateResponse {
    public String contentType;
    public DcimRegionsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Region region;
    public DcimRegionsPartialUpdateResponse withRegion(openapisdk.models.shared.Region region) {
        this.region = region;
        return this;
    }
    public Long statusCode;
    public DcimRegionsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}