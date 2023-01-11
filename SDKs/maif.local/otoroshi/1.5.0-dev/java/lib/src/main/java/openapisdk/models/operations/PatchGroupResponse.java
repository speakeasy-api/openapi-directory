package openapisdk.models.operations;



public class PatchGroupResponse {
    public String contentType;
    public PatchGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public PatchGroupResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
    public Long statusCode;
    public PatchGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}