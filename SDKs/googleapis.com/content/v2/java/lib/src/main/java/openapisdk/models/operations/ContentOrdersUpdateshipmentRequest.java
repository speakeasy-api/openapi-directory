package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersUpdateshipmentRequest {
    public ContentOrdersUpdateshipmentPathParams pathParams;
    public ContentOrdersUpdateshipmentRequest withPathParams(ContentOrdersUpdateshipmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersUpdateshipmentQueryParams queryParams;
    public ContentOrdersUpdateshipmentRequest withQueryParams(ContentOrdersUpdateshipmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersUpdateShipmentRequest request;
    public ContentOrdersUpdateshipmentRequest withRequest(openapisdk.models.shared.OrdersUpdateShipmentRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersUpdateshipmentSecurity security;
    public ContentOrdersUpdateshipmentRequest withSecurity(ContentOrdersUpdateshipmentSecurity security) {
        this.security = security;
        return this;
    }
}