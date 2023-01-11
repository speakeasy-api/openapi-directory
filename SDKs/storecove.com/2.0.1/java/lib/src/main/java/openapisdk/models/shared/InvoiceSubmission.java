package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvoiceSubmission
 * The invoice you want Storecove to process, with some meta-data.
**/
public class InvoiceSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public Attachment[] attachments;
    public InvoiceSubmission withAttachments(Attachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createPrimaryImage")
    public Boolean createPrimaryImage;
    public InvoiceSubmission withCreatePrimaryImage(Boolean createPrimaryImage) {
        this.createPrimaryImage = createPrimaryImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public String document;
    public InvoiceSubmission withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentUrl")
    public String documentUrl;
    public InvoiceSubmission withDocumentUrl(String documentUrl) {
        this.documentUrl = documentUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotencyGuid")
    public String idempotencyGuid;
    public InvoiceSubmission withIdempotencyGuid(String idempotencyGuid) {
        this.idempotencyGuid = idempotencyGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice")
    public Invoice invoice;
    public InvoiceSubmission withInvoice(Invoice invoice) {
        this.invoice = invoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceData")
    public InvoiceData invoiceData;
    public InvoiceSubmission withInvoiceData(InvoiceData invoiceData) {
        this.invoiceData = invoiceData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceRecipient")
    public InvoiceRecipient invoiceRecipient;
    public InvoiceSubmission withInvoiceRecipient(InvoiceRecipient invoiceRecipient) {
        this.invoiceRecipient = invoiceRecipient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legalEntityId")
    public Long legalEntityId;
    public InvoiceSubmission withLegalEntityId(Long legalEntityId) {
        this.legalEntityId = legalEntityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legalSupplierId")
    public Long legalSupplierId;
    public InvoiceSubmission withLegalSupplierId(Long legalSupplierId) {
        this.legalSupplierId = legalSupplierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public InvoiceSubmissionModeEnum mode;
    public InvoiceSubmission withMode(InvoiceSubmissionModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing")
    public Routing routing;
    public InvoiceSubmission withRouting(Routing routing) {
        this.routing = routing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierId")
    public Long supplierId;
    public InvoiceSubmission withSupplierId(Long supplierId) {
        this.supplierId = supplierId;
        return this;
    }
}