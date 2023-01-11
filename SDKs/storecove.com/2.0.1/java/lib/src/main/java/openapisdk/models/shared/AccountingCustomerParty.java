package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountingCustomerParty
 * The customer receiving the invoice.
**/
public class AccountingCustomerParty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AccountingCustomerParty withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("party")
    public Party party;
    public AccountingCustomerParty withParty(Party party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicIdentifiers")
    public PublicIdentifier[] publicIdentifiers;
    public AccountingCustomerParty withPublicIdentifiers(PublicIdentifier[] publicIdentifiers) {
        this.publicIdentifiers = publicIdentifiers;
        return this;
    }
}