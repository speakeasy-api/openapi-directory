package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInvoiceSubmissionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InvoiceSubmission request;
    public CreateInvoiceSubmissionRequest withRequest(openapisdk.models.shared.InvoiceSubmission request) {
        this.request = request;
        return this;
    }
}