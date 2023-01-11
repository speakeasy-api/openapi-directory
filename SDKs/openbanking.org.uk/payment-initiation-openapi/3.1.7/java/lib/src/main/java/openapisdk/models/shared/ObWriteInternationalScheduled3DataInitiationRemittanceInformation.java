package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalScheduled3DataInitiationRemittanceInformation
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
public class ObWriteInternationalScheduled3DataInitiationRemittanceInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteInternationalScheduled3DataInitiationRemittanceInformation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unstructured")
    public String unstructured;
    public ObWriteInternationalScheduled3DataInitiationRemittanceInformation withUnstructured(String unstructured) {
        this.unstructured = unstructured;
        return this;
    }
}