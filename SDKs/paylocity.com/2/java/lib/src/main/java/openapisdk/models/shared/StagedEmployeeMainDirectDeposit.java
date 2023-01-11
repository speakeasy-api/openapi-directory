package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StagedEmployeeMainDirectDeposit
 * The Main Direct Deposit model
**/
public class StagedEmployeeMainDirectDeposit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public StagedEmployeeMainDirectDeposit withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public StagedEmployeeMainDirectDeposit withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSkipPreNote")
    public Boolean isSkipPreNote;
    public StagedEmployeeMainDirectDeposit withIsSkipPreNote(Boolean isSkipPreNote) {
        this.isSkipPreNote = isSkipPreNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preNoteDate")
    public String preNoteDate;
    public StagedEmployeeMainDirectDeposit withPreNoteDate(String preNoteDate) {
        this.preNoteDate = preNoteDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public StagedEmployeeMainDirectDeposit withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}