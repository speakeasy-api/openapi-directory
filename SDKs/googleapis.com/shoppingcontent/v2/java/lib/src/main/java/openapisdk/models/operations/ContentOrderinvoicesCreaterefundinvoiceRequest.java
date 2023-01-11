package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrderinvoicesCreaterefundinvoiceRequest {
    public ContentOrderinvoicesCreaterefundinvoicePathParams pathParams;
    public ContentOrderinvoicesCreaterefundinvoiceRequest withPathParams(ContentOrderinvoicesCreaterefundinvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrderinvoicesCreaterefundinvoiceQueryParams queryParams;
    public ContentOrderinvoicesCreaterefundinvoiceRequest withQueryParams(ContentOrderinvoicesCreaterefundinvoiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderinvoicesCreateRefundInvoiceRequest request;
    public ContentOrderinvoicesCreaterefundinvoiceRequest withRequest(openapisdk.models.shared.OrderinvoicesCreateRefundInvoiceRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrderinvoicesCreaterefundinvoiceSecurity security;
    public ContentOrderinvoicesCreaterefundinvoiceRequest withSecurity(ContentOrderinvoicesCreaterefundinvoiceSecurity security) {
        this.security = security;
        return this;
    }
}