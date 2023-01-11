package openapisdk.models.operations;



public class EditCoveragePlanResponse {
    public String contentType;
    public EditCoveragePlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CoveragePlanResult coveragePlanResult;
    public EditCoveragePlanResponse withCoveragePlanResult(openapisdk.models.shared.CoveragePlanResult coveragePlanResult) {
        this.coveragePlanResult = coveragePlanResult;
        return this;
    }
    public Long statusCode;
    public EditCoveragePlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}