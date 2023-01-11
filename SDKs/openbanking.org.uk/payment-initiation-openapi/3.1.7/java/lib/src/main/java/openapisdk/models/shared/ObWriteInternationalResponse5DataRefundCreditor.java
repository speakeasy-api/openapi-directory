package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalResponse5DataRefundCreditor
 * Set of elements used to identify a person or an organisation.
**/
public class ObWriteInternationalResponse5DataRefundCreditor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalResponse5DataRefundCreditor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalAddress")
    public ObPostalAddress6 postalAddress;
    public ObWriteInternationalResponse5DataRefundCreditor withPostalAddress(ObPostalAddress6 postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
}