package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectDepositMainDirectDeposit
 * The main Direct Deposit account.
**/
public class DirectDepositMainDirectDeposit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public DirectDepositMainDirectDeposit withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public DirectDepositMainDirectDeposit withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockSpecial")
    public Boolean blockSpecial;
    public DirectDepositMainDirectDeposit withBlockSpecial(Boolean blockSpecial) {
        this.blockSpecial = blockSpecial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSkipPreNote")
    public Boolean isSkipPreNote;
    public DirectDepositMainDirectDeposit withIsSkipPreNote(Boolean isSkipPreNote) {
        this.isSkipPreNote = isSkipPreNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameOnAccount")
    public String nameOnAccount;
    public DirectDepositMainDirectDeposit withNameOnAccount(String nameOnAccount) {
        this.nameOnAccount = nameOnAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preNoteDate")
    public String preNoteDate;
    public DirectDepositMainDirectDeposit withPreNoteDate(String preNoteDate) {
        this.preNoteDate = preNoteDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public DirectDepositMainDirectDeposit withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}