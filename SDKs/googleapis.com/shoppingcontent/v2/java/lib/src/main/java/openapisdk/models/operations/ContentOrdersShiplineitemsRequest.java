package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersShiplineitemsRequest {
    public ContentOrdersShiplineitemsPathParams pathParams;
    public ContentOrdersShiplineitemsRequest withPathParams(ContentOrdersShiplineitemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersShiplineitemsQueryParams queryParams;
    public ContentOrdersShiplineitemsRequest withQueryParams(ContentOrdersShiplineitemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersShipLineItemsRequest request;
    public ContentOrdersShiplineitemsRequest withRequest(openapisdk.models.shared.OrdersShipLineItemsRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersShiplineitemsSecurity security;
    public ContentOrdersShiplineitemsRequest withSecurity(ContentOrdersShiplineitemsSecurity security) {
        this.security = security;
        return this;
    }
}