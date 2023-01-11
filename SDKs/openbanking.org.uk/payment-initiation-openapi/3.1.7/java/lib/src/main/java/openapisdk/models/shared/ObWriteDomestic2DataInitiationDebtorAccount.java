package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteDomestic2DataInitiationDebtorAccount
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
public class ObWriteDomestic2DataInitiationDebtorAccount {
    @JsonProperty("Identification")
    public String identification;
    public ObWriteDomestic2DataInitiationDebtorAccount withIdentification(String identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ObWriteDomestic2DataInitiationDebtorAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SchemeName")
    public String schemeName;
    public ObWriteDomestic2DataInitiationDebtorAccount withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryIdentification")
    public String secondaryIdentification;
    public ObWriteDomestic2DataInitiationDebtorAccount withSecondaryIdentification(String secondaryIdentification) {
        this.secondaryIdentification = secondaryIdentification;
        return this;
    }
}