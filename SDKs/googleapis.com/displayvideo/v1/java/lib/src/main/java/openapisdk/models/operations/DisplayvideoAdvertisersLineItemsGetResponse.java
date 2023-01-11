package openapisdk.models.operations;



public class DisplayvideoAdvertisersLineItemsGetResponse {
    public String contentType;
    public DisplayvideoAdvertisersLineItemsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LineItem lineItem;
    public DisplayvideoAdvertisersLineItemsGetResponse withLineItem(openapisdk.models.shared.LineItem lineItem) {
        this.lineItem = lineItem;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLineItemsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}