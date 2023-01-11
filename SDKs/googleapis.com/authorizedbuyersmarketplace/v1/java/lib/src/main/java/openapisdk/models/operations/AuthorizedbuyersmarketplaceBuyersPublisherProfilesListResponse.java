package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPublisherProfilesResponse listPublisherProfilesResponse;
    public AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse withListPublisherProfilesResponse(openapisdk.models.shared.ListPublisherProfilesResponse listPublisherProfilesResponse) {
        this.listPublisherProfilesResponse = listPublisherProfilesResponse;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}