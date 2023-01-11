package openapisdk.models.operations;



public class SaveCorporateUserGroupByIdResponse {
    public String contentType;
    public SaveCorporateUserGroupByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SaveCorporateUserGroupByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserGroup userGroup;
    public SaveCorporateUserGroupByIdResponse withUserGroup(openapisdk.models.shared.UserGroup userGroup) {
        this.userGroup = userGroup;
        return this;
    }
}