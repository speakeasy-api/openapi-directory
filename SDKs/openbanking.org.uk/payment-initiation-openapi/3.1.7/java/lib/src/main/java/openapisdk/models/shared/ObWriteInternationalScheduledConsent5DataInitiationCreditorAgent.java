package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent
 * Financial institution servicing an account for the creditor.
**/
public class ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identification")
    public String identification;
    public ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalAddress")
    public ObPostalAddress6 postalAddress;
    public ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent withPostalAddress(ObPostalAddress6 postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
}