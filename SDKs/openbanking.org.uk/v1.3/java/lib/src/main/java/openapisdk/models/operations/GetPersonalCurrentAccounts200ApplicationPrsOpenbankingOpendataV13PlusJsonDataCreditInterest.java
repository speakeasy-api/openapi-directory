package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest
 * Credit Interest
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest {
    @JsonProperty("CreditCharged")
    public Boolean creditCharged;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest withCreditCharged(Boolean creditCharged) {
        this.creditCharged = creditCharged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditInterestGroup")
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup[] creditInterestGroup;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest withCreditInterestGroup(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup[] creditInterestGroup) {
        this.creditInterestGroup = creditInterestGroup;
        return this;
    }
}