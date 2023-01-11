package openapisdk.models.operations;



public class DeleteItemIdFromSpotListResponse {
    public String contentType;
    public DeleteItemIdFromSpotListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseListResource responseListResource;
    public DeleteItemIdFromSpotListResponse withResponseListResource(openapisdk.models.shared.ResponseListResource responseListResource) {
        this.responseListResource = responseListResource;
        return this;
    }
    public Long statusCode;
    public DeleteItemIdFromSpotListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}