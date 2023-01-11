package openapisdk.models.operations;



public class GetCorporateUserGroupsByIdResponse {
    public String contentType;
    public GetCorporateUserGroupsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCorporateUserGroupsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserGroupList userGroupList;
    public GetCorporateUserGroupsByIdResponse withUserGroupList(openapisdk.models.shared.UserGroupList userGroupList) {
        this.userGroupList = userGroupList;
        return this;
    }
}