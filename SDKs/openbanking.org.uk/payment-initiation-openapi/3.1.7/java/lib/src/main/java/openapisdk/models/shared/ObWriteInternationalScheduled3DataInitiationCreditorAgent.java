package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalScheduled3DataInitiationCreditorAgent
 * Financial institution servicing an account for the creditor.
**/
public class ObWriteInternationalScheduled3DataInitiationCreditorAgent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Identification")
    public String identification;
    public ObWriteInternationalScheduled3DataInitiationCreditorAgent withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalScheduled3DataInitiationCreditorAgent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalAddress")
    public ObPostalAddress6 postalAddress;
    public ObWriteInternationalScheduled3DataInitiationCreditorAgent withPostalAddress(ObPostalAddress6 postalAddress) {
        this.postalAddress = postalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteInternationalScheduled3DataInitiationCreditorAgent withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
}