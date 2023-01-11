package openapisdk.models.operations;



public class DisplayvideoAdvertisersInsertionOrdersListResponse {
    public String contentType;
    public DisplayvideoAdvertisersInsertionOrdersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInsertionOrdersResponse listInsertionOrdersResponse;
    public DisplayvideoAdvertisersInsertionOrdersListResponse withListInsertionOrdersResponse(openapisdk.models.shared.ListInsertionOrdersResponse listInsertionOrdersResponse) {
        this.listInsertionOrdersResponse = listInsertionOrdersResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersInsertionOrdersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}