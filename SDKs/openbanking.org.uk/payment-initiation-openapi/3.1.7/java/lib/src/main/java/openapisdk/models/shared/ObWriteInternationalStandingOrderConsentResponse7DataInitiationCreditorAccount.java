package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount
 * Provides the details to identify the beneficiary account.
**/
public class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount {
    @JsonProperty("Identification")
    public String identification;
    public ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}