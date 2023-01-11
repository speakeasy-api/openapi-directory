package openapisdk.models.operations;



public class ContentOrdersUpdatemerchantorderidResponse {
    public String contentType;
    public ContentOrdersUpdatemerchantorderidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersUpdateMerchantOrderIdResponse ordersUpdateMerchantOrderIdResponse;
    public ContentOrdersUpdatemerchantorderidResponse withOrdersUpdateMerchantOrderIdResponse(openapisdk.models.shared.OrdersUpdateMerchantOrderIdResponse ordersUpdateMerchantOrderIdResponse) {
        this.ordersUpdateMerchantOrderIdResponse = ordersUpdateMerchantOrderIdResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersUpdatemerchantorderidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}