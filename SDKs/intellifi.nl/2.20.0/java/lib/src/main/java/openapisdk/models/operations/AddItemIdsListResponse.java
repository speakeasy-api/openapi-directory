package openapisdk.models.operations;



public class AddItemIdsListResponse {
    public String contentType;
    public AddItemIdsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseListResource responseListResource;
    public AddItemIdsListResponse withResponseListResource(openapisdk.models.shared.ResponseListResource responseListResource) {
        this.responseListResource = responseListResource;
        return this;
    }
    public Long statusCode;
    public AddItemIdsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}