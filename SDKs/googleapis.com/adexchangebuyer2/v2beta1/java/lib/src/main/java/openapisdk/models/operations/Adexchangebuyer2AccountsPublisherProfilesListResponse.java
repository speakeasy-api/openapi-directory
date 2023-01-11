package openapisdk.models.operations;



public class Adexchangebuyer2AccountsPublisherProfilesListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsPublisherProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPublisherProfilesResponse listPublisherProfilesResponse;
    public Adexchangebuyer2AccountsPublisherProfilesListResponse withListPublisherProfilesResponse(openapisdk.models.shared.ListPublisherProfilesResponse listPublisherProfilesResponse) {
        this.listPublisherProfilesResponse = listPublisherProfilesResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsPublisherProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}