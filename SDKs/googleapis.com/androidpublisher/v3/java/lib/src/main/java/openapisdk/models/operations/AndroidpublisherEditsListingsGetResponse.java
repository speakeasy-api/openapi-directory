package openapisdk.models.operations;



public class AndroidpublisherEditsListingsGetResponse {
    public String contentType;
    public AndroidpublisherEditsListingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Listing listing;
    public AndroidpublisherEditsListingsGetResponse withListing(openapisdk.models.shared.Listing listing) {
        this.listing = listing;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsListingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}