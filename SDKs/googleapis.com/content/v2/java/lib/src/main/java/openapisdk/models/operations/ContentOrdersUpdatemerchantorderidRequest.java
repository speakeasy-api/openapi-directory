package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersUpdatemerchantorderidRequest {
    public ContentOrdersUpdatemerchantorderidPathParams pathParams;
    public ContentOrdersUpdatemerchantorderidRequest withPathParams(ContentOrdersUpdatemerchantorderidPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersUpdatemerchantorderidQueryParams queryParams;
    public ContentOrdersUpdatemerchantorderidRequest withQueryParams(ContentOrdersUpdatemerchantorderidQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersUpdateMerchantOrderIdRequest request;
    public ContentOrdersUpdatemerchantorderidRequest withRequest(openapisdk.models.shared.OrdersUpdateMerchantOrderIdRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersUpdatemerchantorderidSecurity security;
    public ContentOrdersUpdatemerchantorderidRequest withSecurity(ContentOrdersUpdatemerchantorderidSecurity security) {
        this.security = security;
        return this;
    }
}