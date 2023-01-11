package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreflightInvoiceRecipientRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InvoiceRecipientPreflight request;
    public PreflightInvoiceRecipientRequest withRequest(openapisdk.models.shared.InvoiceRecipientPreflight request) {
        this.request = request;
        return this;
    }
}