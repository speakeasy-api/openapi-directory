package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersCreatetestreturnRequest {
    public ContentOrdersCreatetestreturnPathParams pathParams;
    public ContentOrdersCreatetestreturnRequest withPathParams(ContentOrdersCreatetestreturnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersCreatetestreturnQueryParams queryParams;
    public ContentOrdersCreatetestreturnRequest withQueryParams(ContentOrdersCreatetestreturnQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersCreateTestReturnRequest request;
    public ContentOrdersCreatetestreturnRequest withRequest(openapisdk.models.shared.OrdersCreateTestReturnRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersCreatetestreturnSecurity security;
    public ContentOrdersCreatetestreturnRequest withSecurity(ContentOrdersCreatetestreturnSecurity security) {
        this.security = security;
        return this;
    }
}