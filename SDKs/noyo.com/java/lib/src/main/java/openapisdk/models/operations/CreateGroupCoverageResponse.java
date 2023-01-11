package openapisdk.models.operations;



public class CreateGroupCoverageResponse {
    public String contentType;
    public CreateGroupCoverageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupCoverageResult groupCoverageResult;
    public CreateGroupCoverageResponse withGroupCoverageResult(openapisdk.models.shared.GroupCoverageResult groupCoverageResult) {
        this.groupCoverageResult = groupCoverageResult;
        return this;
    }
    public Long statusCode;
    public CreateGroupCoverageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}