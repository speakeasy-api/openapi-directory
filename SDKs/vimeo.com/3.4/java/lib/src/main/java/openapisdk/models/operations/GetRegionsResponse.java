package openapisdk.models.operations;



public class GetRegionsResponse {
    public String contentType;
    public GetRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnDemandRegion[] onDemandRegions;
    public GetRegionsResponse withOnDemandRegions(openapisdk.models.shared.OnDemandRegion[] onDemandRegions) {
        this.onDemandRegions = onDemandRegions;
        return this;
    }
}