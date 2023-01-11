package openapisdk.models.operations;



public class UpdateHostedNumbersHostedNumberOrderResponse {
    public String contentType;
    public UpdateHostedNumbersHostedNumberOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateHostedNumbersHostedNumberOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder previewHostedNumbersHostedNumberOrder;
    public UpdateHostedNumbersHostedNumberOrderResponse withPreviewHostedNumbersHostedNumberOrder(openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder previewHostedNumbersHostedNumberOrder) {
        this.previewHostedNumbersHostedNumberOrder = previewHostedNumbersHostedNumberOrder;
        return this;
    }
}