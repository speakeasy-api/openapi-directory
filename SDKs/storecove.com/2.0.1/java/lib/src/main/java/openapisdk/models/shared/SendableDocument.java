package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendableDocument
 * The document to send.
**/
public class SendableDocument {
    @JsonProperty("documentType")
    public SendableDocumentDocumentTypeEnum documentType;
    public SendableDocument withDocumentType(SendableDocumentDocumentTypeEnum documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public Invoice invoice;
    public SendableDocument withInvoice(Invoice invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceResponse")
    public DocumentInvoiceResponse invoiceResponse;
    public SendableDocument withInvoiceResponse(DocumentInvoiceResponse invoiceResponse) {
        this.invoiceResponse = invoiceResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawDocumentData")
    public RawDocumentData rawDocumentData;
    public SendableDocument withRawDocumentData(RawDocumentData rawDocumentData) {
        this.rawDocumentData = rawDocumentData;
        return this;
    }
}