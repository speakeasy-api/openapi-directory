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
    public openapisdk.models.shared.UserGroupList userGroupList;
    public GetUserGroupsResponse withUserGroupList(openapisdk.models.shared.UserGroupList userGroupList) {
        this.userGroupList = userGroupList;
        return this;
    }
}