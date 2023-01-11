package openapisdk.models.operations;



public class DisplayvideoGuaranteedOrdersCreateResponse {
    public String contentType;
    public DisplayvideoGuaranteedOrdersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GuaranteedOrder guaranteedOrder;
    public DisplayvideoGuaranteedOrdersCreateResponse withGuaranteedOrder(openapisdk.models.shared.GuaranteedOrder guaranteedOrder) {
        this.guaranteedOrder = guaranteedOrder;
        return this;
    }
    public Long statusCode;
    public DisplayvideoGuaranteedOrdersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}