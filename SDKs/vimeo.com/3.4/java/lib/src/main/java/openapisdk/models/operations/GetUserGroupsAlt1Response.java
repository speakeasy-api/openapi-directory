package openapisdk.models.operations;



public class GetUserGroupsAlt1Response {
    public String contentType;
    public GetUserGroupsAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserGroupsAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Group[] groups;
    public GetUserGroupsAlt1Response withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}