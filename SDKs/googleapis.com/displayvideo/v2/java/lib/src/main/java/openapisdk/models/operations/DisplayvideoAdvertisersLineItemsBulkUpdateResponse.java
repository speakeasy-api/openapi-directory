package openapisdk.models.operations;



public class DisplayvideoAdvertisersLineItemsBulkUpdateResponse {
    public openapisdk.models.shared.BulkUpdateLineItemsResponse bulkUpdateLineItemsResponse;
    public DisplayvideoAdvertisersLineItemsBulkUpdateResponse withBulkUpdateLineItemsResponse(openapisdk.models.shared.BulkUpdateLineItemsResponse bulkUpdateLineItemsResponse) {
        this.bulkUpdateLineItemsResponse = bulkUpdateLineItemsResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersLineItemsBulkUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLineItemsBulkUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}