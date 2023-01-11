package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
public class ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount {
    @JsonProperty("Identification")
    public String identification;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}