package openapisdk.models.operations;



public class GetUserGroupsResponse {
    public String contentType;
    public GetUserGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Group[] groups;
    public GetUserGroupsResponse withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}