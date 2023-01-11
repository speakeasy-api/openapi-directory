package openapisdk.models.operations;



public class UpdateGroupResponse {
    public String contentType;
    public UpdateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public UpdateGroupResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
    public Long statusCode;
    public UpdateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}