package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalStandingOrderResponse7DataInitiationCreditor
 * Party to which an amount of money is due.
**/
public class ObWriteInternationalStandingOrderResponse7DataInitiationCreditor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalAddress")
    public ObPostalAddress6 postalAddress;
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditor withPostalAddress(ObPostalAddress6 postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
}