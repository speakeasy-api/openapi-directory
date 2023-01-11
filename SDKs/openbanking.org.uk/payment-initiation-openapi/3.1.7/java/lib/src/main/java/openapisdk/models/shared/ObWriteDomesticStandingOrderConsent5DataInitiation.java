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
 * ObWriteDomesticStandingOrderConsent5DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
public class ObWriteDomesticStandingOrderConsent5DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withCreditorAccount(ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withDebtorAccount(ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FinalPaymentAmount")
    public ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount finalPaymentAmount;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withFinalPaymentAmount(ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount finalPaymentAmount) {
        this.finalPaymentAmount = finalPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinalPaymentDateTime")
    public OffsetDateTime finalPaymentDateTime;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withFinalPaymentDateTime(OffsetDateTime finalPaymentDateTime) {
        this.finalPaymentDateTime = finalPaymentDateTime;
        return this;
    }
    @JsonProperty("FirstPaymentAmount")
    public ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount firstPaymentAmount;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withFirstPaymentAmount(ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount firstPaymentAmount) {
        this.firstPaymentAmount = firstPaymentAmount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("FirstPaymentDateTime")
    public OffsetDateTime firstPaymentDateTime;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withFirstPaymentDateTime(OffsetDateTime firstPaymentDateTime) {
        this.firstPaymentDateTime = firstPaymentDateTime;
        return this;
    }
    @JsonProperty("Frequency")
    public String frequency;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfPayments")
    public String numberOfPayments;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withNumberOfPayments(String numberOfPayments) {
        this.numberOfPayments = numberOfPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecurringPaymentAmount")
    public ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount recurringPaymentAmount;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withRecurringPaymentAmount(ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount recurringPaymentAmount) {
        this.recurringPaymentAmount = recurringPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RecurringPaymentDateTime")
    public OffsetDateTime recurringPaymentDateTime;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withRecurringPaymentDateTime(OffsetDateTime recurringPaymentDateTime) {
        this.recurringPaymentDateTime = recurringPaymentDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomesticStandingOrderConsent5DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}