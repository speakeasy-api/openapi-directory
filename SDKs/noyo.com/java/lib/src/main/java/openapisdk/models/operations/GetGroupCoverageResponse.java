package openapisdk.models.operations;



public class GetGroupCoverageResponse {
    public String contentType;
    public GetGroupCoverageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupCoverageResult groupCoverageResult;
    public GetGroupCoverageResponse withGroupCoverageResult(openapisdk.models.shared.GroupCoverageResult groupCoverageResult) {
        this.groupCoverageResult = groupCoverageResult;
        return this;
    }
    public Long statusCode;
    public GetGroupCoverageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}