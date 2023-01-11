package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentInvoiceResponse
 * The invoice response to send.
**/
public class DocumentInvoiceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clarifications")
    public InvoiceResponseClarification[] clarifications;
    public DocumentInvoiceResponse withClarifications(InvoiceResponseClarification[] clarifications) {
        this.clarifications = clarifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public String effectiveDate;
    public DocumentInvoiceResponse withEffectiveDate(String effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public DocumentInvoiceResponse withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("responseCode")
    public DocumentInvoiceResponseResponseCodeEnum responseCode;
    public DocumentInvoiceResponse withResponseCode(DocumentInvoiceResponseResponseCodeEnum responseCode) {
        this.responseCode = responseCode;
        return this;
    }
}