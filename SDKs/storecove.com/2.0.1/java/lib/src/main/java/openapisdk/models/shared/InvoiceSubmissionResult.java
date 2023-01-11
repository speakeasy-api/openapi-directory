package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvoiceSubmissionResult
 * The result of an invoice submission
**/
public class InvoiceSubmissionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guid")
    public String guid;
    public InvoiceSubmissionResult withGuid(String guid) {
        this.guid = guid;
        return this;
    }
}