package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeAdditionalDirectDeposit
 * The additional direct deposit model
**/
public class EmployeeAdditionalDirectDeposit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public EmployeeAdditionalDirectDeposit withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public EmployeeAdditionalDirectDeposit withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public EmployeeAdditionalDirectDeposit withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountType")
    public String amountType;
    public EmployeeAdditionalDirectDeposit withAmountType(String amountType) {
        this.amountType = amountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockSpecial")
    public Boolean blockSpecial;
    public EmployeeAdditionalDirectDeposit withBlockSpecial(Boolean blockSpecial) {
        this.blockSpecial = blockSpecial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSkipPreNote")
    public Boolean isSkipPreNote;
    public EmployeeAdditionalDirectDeposit withIsSkipPreNote(Boolean isSkipPreNote) {
        this.isSkipPreNote = isSkipPreNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameOnAccount")
    public String nameOnAccount;
    public EmployeeAdditionalDirectDeposit withNameOnAccount(String nameOnAccount) {
        this.nameOnAccount = nameOnAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preNoteDate")
    public String preNoteDate;
    public EmployeeAdditionalDirectDeposit withPreNoteDate(String preNoteDate) {
        this.preNoteDate = preNoteDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public EmployeeAdditionalDirectDeposit withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}