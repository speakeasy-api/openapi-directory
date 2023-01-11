package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersCanceltestorderbycustomerRequest {
    public ContentOrdersCanceltestorderbycustomerPathParams pathParams;
    public ContentOrdersCanceltestorderbycustomerRequest withPathParams(ContentOrdersCanceltestorderbycustomerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrdersCanceltestorderbycustomerQueryParams queryParams;
    public ContentOrdersCanceltestorderbycustomerRequest withQueryParams(ContentOrdersCanceltestorderbycustomerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrdersCancelTestOrderByCustomerRequest request;
    public ContentOrdersCanceltestorderbycustomerRequest withRequest(openapisdk.models.shared.OrdersCancelTestOrderByCustomerRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrdersCanceltestorderbycustomerSecurity security;
    public ContentOrdersCanceltestorderbycustomerRequest withSecurity(ContentOrdersCanceltestorderbycustomerSecurity security) {
        this.security = security;
        return this;
    }
}