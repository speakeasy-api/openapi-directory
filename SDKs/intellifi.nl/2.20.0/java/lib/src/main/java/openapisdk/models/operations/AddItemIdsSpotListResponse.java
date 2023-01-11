package openapisdk.models.operations;



public class AddItemIdsSpotListResponse {
    public String contentType;
    public AddItemIdsSpotListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponseListResource responseListResource;
    public AddItemIdsSpotListResponse withResponseListResource(openapisdk.models.shared.ResponseListResource responseListResource) {
        this.responseListResource = responseListResource;
        return this;
    }
    public Long statusCode;
    public AddItemIdsSpotListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}