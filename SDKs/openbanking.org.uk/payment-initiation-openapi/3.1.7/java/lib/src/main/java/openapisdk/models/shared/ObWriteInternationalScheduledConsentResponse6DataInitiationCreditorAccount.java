package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
public class ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount {
    @JsonProperty("Identification")
    public String identification;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}