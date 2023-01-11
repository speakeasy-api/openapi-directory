package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrderinvoicesCreatechargeinvoiceRequest {
    public ContentOrderinvoicesCreatechargeinvoicePathParams pathParams;
    public ContentOrderinvoicesCreatechargeinvoiceRequest withPathParams(ContentOrderinvoicesCreatechargeinvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContentOrderinvoicesCreatechargeinvoiceQueryParams queryParams;
    public ContentOrderinvoicesCreatechargeinvoiceRequest withQueryParams(ContentOrderinvoicesCreatechargeinvoiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderinvoicesCreateChargeInvoiceRequest request;
    public ContentOrderinvoicesCreatechargeinvoiceRequest withRequest(openapisdk.models.shared.OrderinvoicesCreateChargeInvoiceRequest request) {
        this.request = request;
        return this;
    }
    public ContentOrderinvoicesCreatechargeinvoiceSecurity security;
    public ContentOrderinvoicesCreatechargeinvoiceRequest withSecurity(ContentOrderinvoicesCreatechargeinvoiceSecurity security) {
        this.security = security;
        return this;
    }
}