package openapisdk.models.operations;



public class GetGroupResponse {
    public String contentType;
    public GetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupResult groupResult;
    public GetGroupResponse withGroupResult(openapisdk.models.shared.GroupResult groupResult) {
        this.groupResult = groupResult;
        return this;
    }
    public Long statusCode;
    public GetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}