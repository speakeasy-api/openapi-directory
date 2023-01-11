package openapisdk.models.operations;



public class AndroidpublisherEditsListingsListResponse {
    public String contentType;
    public AndroidpublisherEditsListingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListingsListResponse listingsListResponse;
    public AndroidpublisherEditsListingsListResponse withListingsListResponse(openapisdk.models.shared.ListingsListResponse listingsListResponse) {
        this.listingsListResponse = listingsListResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherEditsListingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}