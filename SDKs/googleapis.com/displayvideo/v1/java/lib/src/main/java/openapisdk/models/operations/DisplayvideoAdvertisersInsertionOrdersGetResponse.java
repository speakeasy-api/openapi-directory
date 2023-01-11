package openapisdk.models.operations;



public class DisplayvideoAdvertisersInsertionOrdersGetResponse {
    public String contentType;
    public DisplayvideoAdvertisersInsertionOrdersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InsertionOrder insertionOrder;
    public DisplayvideoAdvertisersInsertionOrdersGetResponse withInsertionOrder(openapisdk.models.shared.InsertionOrder insertionOrder) {
        this.insertionOrder = insertionOrder;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersInsertionOrdersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}