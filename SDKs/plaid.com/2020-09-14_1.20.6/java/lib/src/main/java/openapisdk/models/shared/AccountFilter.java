package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountFilter
 * Enumerates the account subtypes that the application wishes for the user to be able to select from. For more details refer to Plaid documentation on account filters.
**/
public class AccountFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credit")
    public String[] credit;
    public AccountFilter withCredit(String[] credit) {
        this.credit = credit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("depository")
    public String[] depository;
    public AccountFilter withDepository(String[] depository) {
        this.depository = depository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("investment")
    public String[] investment;
    public AccountFilter withInvestment(String[] investment) {
        this.investment = investment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loan")
    public String[] loan;
    public AccountFilter withLoan(String[] loan) {
        this.loan = loan;
        return this;
    }
}