package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersCreatetestorderRequest {
    public ContentOrdersCreatetestorderPathParams pathParams;
    public ContentOrdersCreatetestorderRequest withPathParams(ContentOrdersCreatetestorderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersCreatetestorderQueryParams queryParams;
    public ContentOrdersCreatetestorderRequest withQueryParams(ContentOrdersCreatetestorderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersCreateTestOrderRequest request;
    public ContentOrdersCreatetestorderRequest withRequest(openapisdk.models.shared.OrdersCreateTestOrderRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersCreatetestorderSecurity security;
    public ContentOrdersCreatetestorderRequest withSecurity(ContentOrdersCreatetestorderSecurity security) {
        this.security = security;
        return this;
    }
}