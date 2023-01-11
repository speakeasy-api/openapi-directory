package openapisdk.models.operations;



public class RealtimebiddingBuyersUserListsCloseResponse {
    public String contentType;
    public RealtimebiddingBuyersUserListsCloseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersUserListsCloseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserList userList;
    public RealtimebiddingBuyersUserListsCloseResponse withUserList(openapisdk.models.shared.UserList userList) {
        this.userList = userList;
        return this;
    }
}