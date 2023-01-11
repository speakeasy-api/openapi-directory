package openapisdk.models.operations;



public class CreateCoveragePlanResponse {
    public String contentType;
    public CreateCoveragePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CoveragePlanResult coveragePlanResult;
    public CreateCoveragePlanResponse withCoveragePlanResult(openapisdk.models.shared.CoveragePlanResult coveragePlanResult) {
        this.coveragePlanResult = coveragePlanResult;
        return this;
    }
    public Long statusCode;
    public CreateCoveragePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}