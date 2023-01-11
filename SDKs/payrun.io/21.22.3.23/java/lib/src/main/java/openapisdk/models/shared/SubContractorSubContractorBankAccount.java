package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubContractorSubContractorBankAccount
 * The sub contractors' bank account
**/
public class SubContractorSubContractorBankAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountName")
    public String accountName;
    public SubContractorSubContractorBankAccount withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountNumber")
    public String accountNumber;
    public SubContractorSubContractorBankAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public SubContractorSubContractorBankAccount withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortCode")
    public String sortCode;
    public SubContractorSubContractorBankAccount withSortCode(String sortCode) {
        this.sortCode = sortCode;
        return this;
    }
}