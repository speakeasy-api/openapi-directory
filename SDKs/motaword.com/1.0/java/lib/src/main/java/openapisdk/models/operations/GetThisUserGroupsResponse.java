package openapisdk.models.operations;



public class GetThisUserGroupsResponse {
    public String contentType;
    public GetThisUserGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetThisUserGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserGroupList userGroupList;
    public GetThisUserGroupsResponse withUserGroupList(openapisdk.models.shared.UserGroupList userGroupList) {
        this.userGroupList = userGroupList;
        return this;
    }
}