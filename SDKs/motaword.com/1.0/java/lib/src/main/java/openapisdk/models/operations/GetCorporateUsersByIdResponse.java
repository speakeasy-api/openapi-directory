package openapisdk.models.operations;



public class GetCorporateUsersByIdResponse {
    public String contentType;
    public GetCorporateUsersByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCorporateUsersByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserList userList;
    public GetCorporateUsersByIdResponse withUserList(openapisdk.models.shared.UserList userList) {
        this.userList = userList;
        return this;
    }
}