package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalScheduledResponse6DataRefundAgent
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
public class ObWriteInternationalScheduledResponse6DataRefundAgent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identification")
    public String identification;
    public ObWriteInternationalScheduledResponse6DataRefundAgent withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalScheduledResponse6DataRefundAgent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalAddress")
    public ObPostalAddress6 postalAddress;
    public ObWriteInternationalScheduledResponse6DataRefundAgent withPostalAddress(ObPostalAddress6 postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteInternationalScheduledResponse6DataRefundAgent withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
}