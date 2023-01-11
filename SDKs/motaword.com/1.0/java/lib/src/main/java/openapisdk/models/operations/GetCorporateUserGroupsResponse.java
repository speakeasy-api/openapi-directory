package openapisdk.models.operations;



public class GetCorporateUserGroupsResponse {
    public String contentType;
    public GetCorporateUserGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCorporateUserGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserGroupList userGroupList;
    public GetCorporateUserGroupsResponse withUserGroupList(openapisdk.models.shared.UserGroupList userGroupList) {
        this.userGroupList = userGroupList;
        return this;
    }
}