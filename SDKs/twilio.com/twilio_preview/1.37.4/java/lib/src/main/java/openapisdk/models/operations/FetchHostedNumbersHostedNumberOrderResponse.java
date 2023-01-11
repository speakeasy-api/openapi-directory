package openapisdk.models.operations;



public class FetchHostedNumbersHostedNumberOrderResponse {
    public String contentType;
    public FetchHostedNumbersHostedNumberOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchHostedNumbersHostedNumberOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder previewHostedNumbersHostedNumberOrder;
    public FetchHostedNumbersHostedNumberOrderResponse withPreviewHostedNumbersHostedNumberOrder(openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder previewHostedNumbersHostedNumberOrder) {
        this.previewHostedNumbersHostedNumberOrder = previewHostedNumbersHostedNumberOrder;
        return this;
    }
}