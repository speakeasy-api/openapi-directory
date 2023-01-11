package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvoiceThePaymentTerms
 * The payment terms of the invoice.
**/
public class InvoiceThePaymentTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public InvoiceThePaymentTerms withNote(String note) {
        this.note = note;
        return this;
    }
}