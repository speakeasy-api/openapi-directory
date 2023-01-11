package openapisdk.models.operations;



public class GetRegionsResponse {
    public String contentType;
    public GetRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetRegionsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Region[] regions;
    public GetRegionsResponse withRegions(openapisdk.models.shared.Region[] regions) {
        this.regions = regions;
        return this;
    }
    public Long statusCode;
    public GetRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}