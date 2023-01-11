package openapisdk.models.operations;



public class RealtimebiddingBuyersUserListsOpenResponse {
    public String contentType;
    public RealtimebiddingBuyersUserListsOpenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersUserListsOpenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserList userList;
    public RealtimebiddingBuyersUserListsOpenResponse withUserList(openapisdk.models.shared.UserList userList) {
        this.userList = userList;
        return this;
    }
}