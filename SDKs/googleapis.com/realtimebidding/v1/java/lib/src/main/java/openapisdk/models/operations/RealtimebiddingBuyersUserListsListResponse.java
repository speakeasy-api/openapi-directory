package openapisdk.models.operations;



public class RealtimebiddingBuyersUserListsListResponse {
    public String contentType;
    public RealtimebiddingBuyersUserListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUserListsResponse listUserListsResponse;
    public RealtimebiddingBuyersUserListsListResponse withListUserListsResponse(openapisdk.models.shared.ListUserListsResponse listUserListsResponse) {
        this.listUserListsResponse = listUserListsResponse;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBuyersUserListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}