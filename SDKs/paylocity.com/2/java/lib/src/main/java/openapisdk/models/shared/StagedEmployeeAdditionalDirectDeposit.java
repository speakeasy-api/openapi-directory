package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StagedEmployeeAdditionalDirectDeposit
 * The additional direct deposit model
**/
public class StagedEmployeeAdditionalDirectDeposit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public StagedEmployeeAdditionalDirectDeposit withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public StagedEmployeeAdditionalDirectDeposit withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public StagedEmployeeAdditionalDirectDeposit withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountType")
    public String amountType;
    public StagedEmployeeAdditionalDirectDeposit withAmountType(String amountType) {
        this.amountType = amountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSkipPreNote")
    public Boolean isSkipPreNote;
    public StagedEmployeeAdditionalDirectDeposit withIsSkipPreNote(Boolean isSkipPreNote) {
        this.isSkipPreNote = isSkipPreNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preNoteDate")
    public String preNoteDate;
    public StagedEmployeeAdditionalDirectDeposit withPreNoteDate(String preNoteDate) {
        this.preNoteDate = preNoteDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public StagedEmployeeAdditionalDirectDeposit withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}