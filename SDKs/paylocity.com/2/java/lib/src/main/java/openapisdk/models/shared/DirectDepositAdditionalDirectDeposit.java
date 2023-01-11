package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectDepositAdditionalDirectDeposit
 * The additional direct deposit model
**/
public class DirectDepositAdditionalDirectDeposit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public DirectDepositAdditionalDirectDeposit withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public DirectDepositAdditionalDirectDeposit withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public DirectDepositAdditionalDirectDeposit withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountType")
    public String amountType;
    public DirectDepositAdditionalDirectDeposit withAmountType(String amountType) {
        this.amountType = amountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockSpecial")
    public Boolean blockSpecial;
    public DirectDepositAdditionalDirectDeposit withBlockSpecial(Boolean blockSpecial) {
        this.blockSpecial = blockSpecial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSkipPreNote")
    public Boolean isSkipPreNote;
    public DirectDepositAdditionalDirectDeposit withIsSkipPreNote(Boolean isSkipPreNote) {
        this.isSkipPreNote = isSkipPreNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameOnAccount")
    public String nameOnAccount;
    public DirectDepositAdditionalDirectDeposit withNameOnAccount(String nameOnAccount) {
        this.nameOnAccount = nameOnAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preNoteDate")
    public String preNoteDate;
    public DirectDepositAdditionalDirectDeposit withPreNoteDate(String preNoteDate) {
        this.preNoteDate = preNoteDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public DirectDepositAdditionalDirectDeposit withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}