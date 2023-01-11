package openapisdk.models.operations;



public class DisplayvideoAdvertisersLineItemsCreateResponse {
    public String contentType;
    public DisplayvideoAdvertisersLineItemsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LineItem lineItem;
    public DisplayvideoAdvertisersLineItemsCreateResponse withLineItem(openapisdk.models.shared.LineItem lineItem) {
        this.lineItem = lineItem;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLineItemsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}