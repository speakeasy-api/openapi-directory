package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount
 * Provides the details to identify the beneficiary account.
**/
public class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount {
    @JsonProperty("Identification")
    public String identification;
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}