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
 * ObWriteDomesticStandingOrderConsentResponse6DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
public class ObWriteDomesticStandingOrderConsentResponse6DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withCreditorAccount(ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withDebtorAccount(ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FinalPaymentAmount")
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount finalPaymentAmount;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withFinalPaymentAmount(ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount finalPaymentAmount) {
        this.finalPaymentAmount = finalPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinalPaymentDateTime")
    public OffsetDateTime finalPaymentDateTime;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withFinalPaymentDateTime(OffsetDateTime finalPaymentDateTime) {
        this.finalPaymentDateTime = finalPaymentDateTime;
        return this;
    }
    @JsonProperty("FirstPaymentAmount")
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount firstPaymentAmount;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withFirstPaymentAmount(ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount firstPaymentAmount) {
        this.firstPaymentAmount = firstPaymentAmount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("FirstPaymentDateTime")
    public OffsetDateTime firstPaymentDateTime;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withFirstPaymentDateTime(OffsetDateTime firstPaymentDateTime) {
        this.firstPaymentDateTime = firstPaymentDateTime;
        return this;
    }
    @JsonProperty("Frequency")
    public String frequency;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfPayments")
    public String numberOfPayments;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withNumberOfPayments(String numberOfPayments) {
        this.numberOfPayments = numberOfPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecurringPaymentAmount")
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount recurringPaymentAmount;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withRecurringPaymentAmount(ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount recurringPaymentAmount) {
        this.recurringPaymentAmount = recurringPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RecurringPaymentDateTime")
    public OffsetDateTime recurringPaymentDateTime;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withRecurringPaymentDateTime(OffsetDateTime recurringPaymentDateTime) {
        this.recurringPaymentDateTime = recurringPaymentDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}