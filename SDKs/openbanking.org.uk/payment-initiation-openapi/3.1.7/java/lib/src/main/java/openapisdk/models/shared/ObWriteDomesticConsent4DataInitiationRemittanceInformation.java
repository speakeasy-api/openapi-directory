package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteDomesticConsent4DataInitiationRemittanceInformation
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
public class ObWriteDomesticConsent4DataInitiationRemittanceInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteDomesticConsent4DataInitiationRemittanceInformation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unstructured")
    public String unstructured;
    public ObWriteDomesticConsent4DataInitiationRemittanceInformation withUnstructured(String unstructured) {
        this.unstructured = unstructured;
        return this;
    }
}