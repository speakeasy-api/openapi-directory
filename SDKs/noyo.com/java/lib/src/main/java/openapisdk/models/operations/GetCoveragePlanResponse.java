package openapisdk.models.operations;



public class GetCoveragePlanResponse {
    public String contentType;
    public GetCoveragePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CoveragePlanResult coveragePlanResult;
    public GetCoveragePlanResponse withCoveragePlanResult(openapisdk.models.shared.CoveragePlanResult coveragePlanResult) {
        this.coveragePlanResult = coveragePlanResult;
        return this;
    }
    public Long statusCode;
    public GetCoveragePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}