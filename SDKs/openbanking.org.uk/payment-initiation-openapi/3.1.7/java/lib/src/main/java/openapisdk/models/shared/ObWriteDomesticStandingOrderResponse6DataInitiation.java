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
 * ObWriteDomesticStandingOrderResponse6DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
public class ObWriteDomesticStandingOrderResponse6DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withCreditorAccount(ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withDebtorAccount(ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FinalPaymentAmount")
    public ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount finalPaymentAmount;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withFinalPaymentAmount(ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount finalPaymentAmount) {
        this.finalPaymentAmount = finalPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinalPaymentDateTime")
    public OffsetDateTime finalPaymentDateTime;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withFinalPaymentDateTime(OffsetDateTime finalPaymentDateTime) {
        this.finalPaymentDateTime = finalPaymentDateTime;
        return this;
    }
    @JsonProperty("FirstPaymentAmount")
    public ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount firstPaymentAmount;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withFirstPaymentAmount(ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount firstPaymentAmount) {
        this.firstPaymentAmount = firstPaymentAmount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("FirstPaymentDateTime")
    public OffsetDateTime firstPaymentDateTime;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withFirstPaymentDateTime(OffsetDateTime firstPaymentDateTime) {
        this.firstPaymentDateTime = firstPaymentDateTime;
        return this;
    }
    @JsonProperty("Frequency")
    public String frequency;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfPayments")
    public String numberOfPayments;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withNumberOfPayments(String numberOfPayments) {
        this.numberOfPayments = numberOfPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecurringPaymentAmount")
    public ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount recurringPaymentAmount;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withRecurringPaymentAmount(ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount recurringPaymentAmount) {
        this.recurringPaymentAmount = recurringPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RecurringPaymentDateTime")
    public OffsetDateTime recurringPaymentDateTime;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withRecurringPaymentDateTime(OffsetDateTime recurringPaymentDateTime) {
        this.recurringPaymentDateTime = recurringPaymentDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomesticStandingOrderResponse6DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}