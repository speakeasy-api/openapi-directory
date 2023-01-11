package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObFundsConfirmationConsentResponse1DataDebtorAccount
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
public class ObFundsConfirmationConsentResponse1DataDebtorAccount {
    @JsonProperty("Identification")
    public String identification;
    public ObFundsConfirmationConsentResponse1DataDebtorAccount withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObFundsConfirmationConsentResponse1DataDebtorAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObFundsConfirmationConsentResponse1DataDebtorAccount withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObFundsConfirmationConsentResponse1DataDebtorAccount withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}