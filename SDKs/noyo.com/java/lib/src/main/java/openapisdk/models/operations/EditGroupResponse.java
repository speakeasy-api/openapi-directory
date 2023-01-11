package openapisdk.models.operations;



public class EditGroupResponse {
    public String contentType;
    public EditGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupResult groupResult;
    public EditGroupResponse withGroupResult(openapisdk.models.shared.GroupResult groupResult) {
        this.groupResult = groupResult;
        return this;
    }
    public Long statusCode;
    public EditGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}