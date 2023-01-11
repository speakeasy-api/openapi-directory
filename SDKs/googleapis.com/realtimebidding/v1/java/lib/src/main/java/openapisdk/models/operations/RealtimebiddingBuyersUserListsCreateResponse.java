package openapisdk.models.operations;



public class RealtimebiddingBuyersUserListsCreateResponse {
    public String contentType;
    public RealtimebiddingBuyersUserListsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersUserListsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserList userList;
    public RealtimebiddingBuyersUserListsCreateResponse withUserList(openapisdk.models.shared.UserList userList) {
        this.userList = userList;
        return this;
    }
}