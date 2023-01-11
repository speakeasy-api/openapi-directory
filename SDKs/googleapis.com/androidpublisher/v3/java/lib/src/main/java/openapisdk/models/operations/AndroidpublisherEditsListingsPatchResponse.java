package openapisdk.models.operations;



public class AndroidpublisherEditsListingsPatchResponse {
    public String contentType;
    public AndroidpublisherEditsListingsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Listing listing;
    public AndroidpublisherEditsListingsPatchResponse withListing(openapisdk.models.shared.Listing listing) {
        this.listing = listing;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsListingsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}