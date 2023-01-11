package openapisdk.models.operations;



public class DisplayvideoAdvertisersInsertionOrdersCreateResponse {
    public String contentType;
    public DisplayvideoAdvertisersInsertionOrdersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InsertionOrder insertionOrder;
    public DisplayvideoAdvertisersInsertionOrdersCreateResponse withInsertionOrder(openapisdk.models.shared.InsertionOrder insertionOrder) {
        this.insertionOrder = insertionOrder;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersInsertionOrdersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}