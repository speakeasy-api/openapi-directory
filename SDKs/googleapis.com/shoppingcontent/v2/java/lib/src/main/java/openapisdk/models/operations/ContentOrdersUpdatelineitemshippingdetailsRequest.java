package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersUpdatelineitemshippingdetailsRequest {
    public ContentOrdersUpdatelineitemshippingdetailsPathParams pathParams;
    public ContentOrdersUpdatelineitemshippingdetailsRequest withPathParams(ContentOrdersUpdatelineitemshippingdetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersUpdatelineitemshippingdetailsQueryParams queryParams;
    public ContentOrdersUpdatelineitemshippingdetailsRequest withQueryParams(ContentOrdersUpdatelineitemshippingdetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersUpdateLineItemShippingDetailsRequest request;
    public ContentOrdersUpdatelineitemshippingdetailsRequest withRequest(openapisdk.models.shared.OrdersUpdateLineItemShippingDetailsRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersUpdatelineitemshippingdetailsSecurity security;
    public ContentOrdersUpdatelineitemshippingdetailsRequest withSecurity(ContentOrdersUpdatelineitemshippingdetailsSecurity security) {
        this.security = security;
        return this;
    }
}