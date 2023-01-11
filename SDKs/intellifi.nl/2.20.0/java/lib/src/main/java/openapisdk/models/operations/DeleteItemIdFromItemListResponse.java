package openapisdk.models.operations;



public class DeleteItemIdFromItemListResponse {
    public String contentType;
    public DeleteItemIdFromItemListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseListResource responseListResource;
    public DeleteItemIdFromItemListResponse withResponseListResource(openapisdk.models.shared.ResponseListResource responseListResource) {
        this.responseListResource = responseListResource;
        return this;
    }
    public Long statusCode;
    public DeleteItemIdFromItemListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}