package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEmployeeBankAccount
 * The employees' bank account
**/
public class EmployeeEmployeeBankAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountName")
    public String accountName;
    public EmployeeEmployeeBankAccount withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountNumber")
    public String accountNumber;
    public EmployeeEmployeeBankAccount withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public EmployeeEmployeeBankAccount withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortCode")
    public String sortCode;
    public EmployeeEmployeeBankAccount withSortCode(String sortCode) {
        this.sortCode = sortCode;
        return this;
    }
}