package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
public class ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unstructured")
    public String unstructured;
    public ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation withUnstructured(String unstructured) {
        this.unstructured = unstructured;
        return this;
    }
}