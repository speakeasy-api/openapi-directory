package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest
 * Credit Interest
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest {
    @JsonProperty("CreditCharged")
    public Boolean creditCharged;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest withCreditCharged(Boolean creditCharged) {
        this.creditCharged = creditCharged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditInterestGroup")
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup[] creditInterestGroup;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest withCreditInterestGroup(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup[] creditInterestGroup) {
        this.creditInterestGroup = creditInterestGroup;
        return this;
    }
}