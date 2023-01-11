package openapisdk.models.operations;



public class ContentOrdersGetbymerchantorderidResponse {
    public String contentType;
    public ContentOrdersGetbymerchantorderidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersGetByMerchantOrderIdResponse ordersGetByMerchantOrderIdResponse;
    public ContentOrdersGetbymerchantorderidResponse withOrdersGetByMerchantOrderIdResponse(openapisdk.models.shared.OrdersGetByMerchantOrderIdResponse ordersGetByMerchantOrderIdResponse) {
        this.ordersGetByMerchantOrderIdResponse = ordersGetByMerchantOrderIdResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersGetbymerchantorderidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}