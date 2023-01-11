package openapisdk.models.operations;



public class DisplayvideoGuaranteedOrdersGetResponse {
    public String contentType;
    public DisplayvideoGuaranteedOrdersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GuaranteedOrder guaranteedOrder;
    public DisplayvideoGuaranteedOrdersGetResponse withGuaranteedOrder(openapisdk.models.shared.GuaranteedOrder guaranteedOrder) {
        this.guaranteedOrder = guaranteedOrder;
        return this;
    }
    public Long statusCode;
    public DisplayvideoGuaranteedOrdersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}