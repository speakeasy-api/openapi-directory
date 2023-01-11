package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ObWriteDomesticStandingOrder3DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
public class ObWriteDomesticStandingOrder3DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomesticStandingOrder3DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomesticStandingOrder3DataInitiation withCreditorAccount(ObWriteDomesticStandingOrder3DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomesticStandingOrder3DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomesticStandingOrder3DataInitiation withDebtorAccount(ObWriteDomesticStandingOrder3DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FinalPaymentAmount")
    public ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount finalPaymentAmount;
    public ObWriteDomesticStandingOrder3DataInitiation withFinalPaymentAmount(ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount finalPaymentAmount) {
        this.finalPaymentAmount = finalPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinalPaymentDateTime")
    public OffsetDateTime finalPaymentDateTime;
    public ObWriteDomesticStandingOrder3DataInitiation withFinalPaymentDateTime(OffsetDateTime finalPaymentDateTime) {
        this.finalPaymentDateTime = finalPaymentDateTime;
        return this;
    }
    @JsonProperty("FirstPaymentAmount")
    public ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount firstPaymentAmount;
    public ObWriteDomesticStandingOrder3DataInitiation withFirstPaymentAmount(ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount firstPaymentAmount) {
        this.firstPaymentAmount = firstPaymentAmount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("FirstPaymentDateTime")
    public OffsetDateTime firstPaymentDateTime;
    public ObWriteDomesticStandingOrder3DataInitiation withFirstPaymentDateTime(OffsetDateTime firstPaymentDateTime) {
        this.firstPaymentDateTime = firstPaymentDateTime;
        return this;
    }
    @JsonProperty("Frequency")
    public String frequency;
    public ObWriteDomesticStandingOrder3DataInitiation withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfPayments")
    public String numberOfPayments;
    public ObWriteDomesticStandingOrder3DataInitiation withNumberOfPayments(String numberOfPayments) {
        this.numberOfPayments = numberOfPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecurringPaymentAmount")
    public ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount recurringPaymentAmount;
    public ObWriteDomesticStandingOrder3DataInitiation withRecurringPaymentAmount(ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount recurringPaymentAmount) {
        this.recurringPaymentAmount = recurringPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RecurringPaymentDateTime")
    public OffsetDateTime recurringPaymentDateTime;
    public ObWriteDomesticStandingOrder3DataInitiation withRecurringPaymentDateTime(OffsetDateTime recurringPaymentDateTime) {
        this.recurringPaymentDateTime = recurringPaymentDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteDomesticStandingOrder3DataInitiation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomesticStandingOrder3DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}