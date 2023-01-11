package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreflightInvoiceRecipientResult
 * The result of preflighting an invoice recipient
**/
public class PreflightInvoiceRecipientResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public PreflightInvoiceRecipientResultResultCodeEnum code;
    public PreflightInvoiceRecipientResult withCode(PreflightInvoiceRecipientResultResultCodeEnum code) {
        this.code = code;
        return this;
    }
}