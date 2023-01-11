package openapisdk.models.operations;



public class EditGroupCoverageResponse {
    public String contentType;
    public EditGroupCoverageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupCoverageResult groupCoverageResult;
    public EditGroupCoverageResponse withGroupCoverageResult(openapisdk.models.shared.GroupCoverageResult groupCoverageResult) {
        this.groupCoverageResult = groupCoverageResult;
        return this;
    }
    public Long statusCode;
    public EditGroupCoverageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}