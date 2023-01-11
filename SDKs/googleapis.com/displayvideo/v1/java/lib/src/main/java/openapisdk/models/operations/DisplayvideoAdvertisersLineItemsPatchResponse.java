package openapisdk.models.operations;



public class DisplayvideoAdvertisersLineItemsPatchResponse {
    public String contentType;
    public DisplayvideoAdvertisersLineItemsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LineItem lineItem;
    public DisplayvideoAdvertisersLineItemsPatchResponse withLineItem(openapisdk.models.shared.LineItem lineItem) {
        this.lineItem = lineItem;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLineItemsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}