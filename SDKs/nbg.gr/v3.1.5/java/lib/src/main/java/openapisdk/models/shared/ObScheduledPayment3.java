package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObScheduledPayment3 {
    @JsonProperty("AccountId")
    public String accountId;
    public ObScheduledPayment3 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAccount")
    public ObCashAccount5 creditorAccount;
    public ObScheduledPayment3 withCreditorAccount(ObCashAccount5 creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorReference")
    public String debtorReference;
    public ObScheduledPayment3 withDebtorReference(String debtorReference) {
        this.debtorReference = debtorReference;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObActiveOrHistoricCurrencyAndAmount instructedAmount;
    public ObScheduledPayment3 withInstructedAmount(ObActiveOrHistoricCurrencyAndAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObScheduledPayment3 withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ScheduledPaymentDateTime")
    public OffsetDateTime scheduledPaymentDateTime;
    public ObScheduledPayment3 withScheduledPaymentDateTime(OffsetDateTime scheduledPaymentDateTime) {
        this.scheduledPaymentDateTime = scheduledPaymentDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScheduledPaymentId")
    public String scheduledPaymentId;
    public ObScheduledPayment3 withScheduledPaymentId(String scheduledPaymentId) {
        this.scheduledPaymentId = scheduledPaymentId;
        return this;
    }
    @JsonProperty("ScheduledType")
    public ObExternalScheduleType1CodeEnum scheduledType;
    public ObScheduledPayment3 withScheduledType(ObExternalScheduleType1CodeEnum scheduledType) {
        this.scheduledType = scheduledType;
        return this;
    }
}