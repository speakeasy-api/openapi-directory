package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountingSupplierParty
 * The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis.
**/
public class AccountingSupplierParty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public SupplierParty party;
    public AccountingSupplierParty withParty(SupplierParty party) {
        this.party = party;
        return this;
    }
}