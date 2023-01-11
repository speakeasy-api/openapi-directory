package openapisdk.models.operations;



public class DisplayvideoAdvertisersLineItemsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersLineItemsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLineItemsResponse listLineItemsResponse;
    public DisplayvideoAdvertisersLineItemsListResponse withListLineItemsResponse(openapisdk.models.shared.ListLineItemsResponse listLineItemsResponse) {
        this.listLineItemsResponse = listLineItemsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLineItemsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}