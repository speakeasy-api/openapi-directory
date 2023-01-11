package openapisdk.models.operations;



public class GetGroupResponse {
    public String contentType;
    public GetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public GetGroupResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
}