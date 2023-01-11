package openapisdk.models.operations;



public class AdmobAccountsListResponse {
    public String contentType;
    public AdmobAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPublisherAccountsResponse listPublisherAccountsResponse;
    public AdmobAccountsListResponse withListPublisherAccountsResponse(openapisdk.models.shared.ListPublisherAccountsResponse listPublisherAccountsResponse) {
        this.listPublisherAccountsResponse = listPublisherAccountsResponse;
        return this;
    }
    public Long statusCode;
    public AdmobAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}