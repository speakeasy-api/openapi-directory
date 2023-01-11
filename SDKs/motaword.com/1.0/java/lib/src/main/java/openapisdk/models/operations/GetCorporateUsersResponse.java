package openapisdk.models.operations;



public class GetCorporateUsersResponse {
    public String contentType;
    public GetCorporateUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCorporateUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserList userList;
    public GetCorporateUsersResponse withUserList(openapisdk.models.shared.UserList userList) {
        this.userList = userList;
        return this;
    }
}