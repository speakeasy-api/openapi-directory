package openapisdk.models.operations;



public class RealtimebiddingBuyersUserListsGetResponse {
    public String contentType;
    public RealtimebiddingBuyersUserListsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersUserListsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserList userList;
    public RealtimebiddingBuyersUserListsGetResponse withUserList(openapisdk.models.shared.UserList userList) {
        this.userList = userList;
        return this;
    }
}