package openapisdk.models.operations;



public class PostGroupsResponse {
    public String contentType;
    public PostGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Group group;
    public PostGroupsResponse withGroup(openapisdk.models.shared.Group group) {
        this.group = group;
        return this;
    }
    public Long statusCode;
    public PostGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}