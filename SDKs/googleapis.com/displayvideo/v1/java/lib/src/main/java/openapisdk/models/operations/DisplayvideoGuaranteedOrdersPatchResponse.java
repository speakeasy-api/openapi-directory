package openapisdk.models.operations;



public class DisplayvideoGuaranteedOrdersPatchResponse {
    public String contentType;
    public DisplayvideoGuaranteedOrdersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GuaranteedOrder guaranteedOrder;
    public DisplayvideoGuaranteedOrdersPatchResponse withGuaranteedOrder(openapisdk.models.shared.GuaranteedOrder guaranteedOrder) {
        this.guaranteedOrder = guaranteedOrder;
        return this;
    }
    public Long statusCode;
    public DisplayvideoGuaranteedOrdersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}