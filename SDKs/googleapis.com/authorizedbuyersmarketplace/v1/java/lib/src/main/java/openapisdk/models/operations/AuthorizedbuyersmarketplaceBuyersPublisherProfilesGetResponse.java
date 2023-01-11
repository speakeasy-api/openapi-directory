package openapisdk.models.operations;



public class AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse {
    public String contentType;
    public AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublisherProfile publisherProfile;
    public AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse withPublisherProfile(openapisdk.models.shared.PublisherProfile publisherProfile) {
        this.publisherProfile = publisherProfile;
        return this;
    }
    public Long statusCode;
    public AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}