package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteFileConsent3DataInitiationRemittanceInformation
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
public class ObWriteFileConsent3DataInitiationRemittanceInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteFileConsent3DataInitiationRemittanceInformation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unstructured")
    public String unstructured;
    public ObWriteFileConsent3DataInitiationRemittanceInformation withUnstructured(String unstructured) {
        this.unstructured = unstructured;
        return this;
    }
}