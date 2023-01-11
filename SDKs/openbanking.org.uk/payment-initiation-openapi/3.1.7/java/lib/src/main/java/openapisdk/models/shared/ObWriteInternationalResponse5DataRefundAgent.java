package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalResponse5DataRefundAgent
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
public class ObWriteInternationalResponse5DataRefundAgent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identification")
    public String identification;
    public ObWriteInternationalResponse5DataRefundAgent withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalResponse5DataRefundAgent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalAddress")
    public ObPostalAddress6 postalAddress;
    public ObWriteInternationalResponse5DataRefundAgent withPostalAddress(ObPostalAddress6 postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteInternationalResponse5DataRefundAgent withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
}