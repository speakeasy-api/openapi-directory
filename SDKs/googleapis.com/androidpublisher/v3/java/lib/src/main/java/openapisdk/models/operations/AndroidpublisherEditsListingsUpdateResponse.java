package openapisdk.models.operations;



public class AndroidpublisherEditsListingsUpdateResponse {
    public String contentType;
    public AndroidpublisherEditsListingsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Listing listing;
    public AndroidpublisherEditsListingsUpdateResponse withListing(openapisdk.models.shared.Listing listing) {
        this.listing = listing;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsListingsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}