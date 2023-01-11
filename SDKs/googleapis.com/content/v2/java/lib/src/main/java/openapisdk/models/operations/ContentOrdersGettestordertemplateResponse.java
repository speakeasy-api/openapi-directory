package openapisdk.models.operations;



public class ContentOrdersGettestordertemplateResponse {
    public String contentType;
    public ContentOrdersGettestordertemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrdersGetTestOrderTemplateResponse ordersGetTestOrderTemplateResponse;
    public ContentOrdersGettestordertemplateResponse withOrdersGetTestOrderTemplateResponse(openapisdk.models.shared.OrdersGetTestOrderTemplateResponse ordersGetTestOrderTemplateResponse) {
        this.ordersGetTestOrderTemplateResponse = ordersGetTestOrderTemplateResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrdersGettestordertemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}