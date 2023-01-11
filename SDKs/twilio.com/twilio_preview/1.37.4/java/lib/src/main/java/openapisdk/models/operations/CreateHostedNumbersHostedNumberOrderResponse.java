package openapisdk.models.operations;



public class CreateHostedNumbersHostedNumberOrderResponse {
    public String contentType;
    public CreateHostedNumbersHostedNumberOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateHostedNumbersHostedNumberOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder previewHostedNumbersHostedNumberOrder;
    public CreateHostedNumbersHostedNumberOrderResponse withPreviewHostedNumbersHostedNumberOrder(openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder previewHostedNumbersHostedNumberOrder) {
        this.previewHostedNumbersHostedNumberOrder = previewHostedNumbersHostedNumberOrder;
        return this;
    }
}