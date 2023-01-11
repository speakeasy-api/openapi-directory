package openapisdk.models.operations;



public class SaveCorporateUserGroupResponse {
    public String contentType;
    public SaveCorporateUserGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SaveCorporateUserGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserGroup userGroup;
    public SaveCorporateUserGroupResponse withUserGroup(openapisdk.models.shared.UserGroup userGroup) {
        this.userGroup = userGroup;
        return this;
    }
}