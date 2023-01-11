package openapisdk.models.operations;



public class RealtimebiddingBuyersUserListsUpdateResponse {
    public String contentType;
    public RealtimebiddingBuyersUserListsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersUserListsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserList userList;
    public RealtimebiddingBuyersUserListsUpdateResponse withUserList(openapisdk.models.shared.UserList userList) {
        this.userList = userList;
        return this;
    }
}