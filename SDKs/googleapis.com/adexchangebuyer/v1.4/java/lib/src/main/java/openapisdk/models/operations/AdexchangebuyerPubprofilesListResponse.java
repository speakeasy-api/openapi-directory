package openapisdk.models.operations;



public class AdexchangebuyerPubprofilesListResponse {
    public String contentType;
    public AdexchangebuyerPubprofilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPublisherProfilesByAccountIdResponse getPublisherProfilesByAccountIdResponse;
    public AdexchangebuyerPubprofilesListResponse withGetPublisherProfilesByAccountIdResponse(openapisdk.models.shared.GetPublisherProfilesByAccountIdResponse getPublisherProfilesByAccountIdResponse) {
        this.getPublisherProfilesByAccountIdResponse = getPublisherProfilesByAccountIdResponse;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerPubprofilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}