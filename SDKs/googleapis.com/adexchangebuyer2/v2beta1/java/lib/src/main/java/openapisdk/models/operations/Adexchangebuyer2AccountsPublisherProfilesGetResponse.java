package openapisdk.models.operations;



public class Adexchangebuyer2AccountsPublisherProfilesGetResponse {
    public String contentType;
    public Adexchangebuyer2AccountsPublisherProfilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublisherProfile publisherProfile;
    public Adexchangebuyer2AccountsPublisherProfilesGetResponse withPublisherProfile(openapisdk.models.shared.PublisherProfile publisherProfile) {
        this.publisherProfile = publisherProfile;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsPublisherProfilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}