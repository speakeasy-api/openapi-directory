package openapisdk.models.operations;



public class DisplayvideoAdvertisersInsertionOrdersPatchResponse {
    public String contentType;
    public DisplayvideoAdvertisersInsertionOrdersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InsertionOrder insertionOrder;
    public DisplayvideoAdvertisersInsertionOrdersPatchResponse withInsertionOrder(openapisdk.models.shared.InsertionOrder insertionOrder) {
        this.insertionOrder = insertionOrder;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersInsertionOrdersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}