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
 * ObWriteInternationalStandingOrderResponse7DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
public class ObWriteInternationalStandingOrderResponse7DataInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditor creditor;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withCreditor(ObWriteInternationalStandingOrderResponse7DataInitiationCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
    @JsonProperty("CreditorAccount")
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount creditorAccount;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withCreditorAccount(ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAgent")
    public ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent creditorAgent;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withCreditorAgent(ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonProperty("CurrencyOfTransfer")
    public String currencyOfTransfer;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withCurrencyOfTransfer(String currencyOfTransfer) {
        this.currencyOfTransfer = currencyOfTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount debtorAccount;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withDebtorAccount(ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCountryCode")
    public String destinationCountryCode;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withDestinationCountryCode(String destinationCountryCode) {
        this.destinationCountryCode = destinationCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedPurpose")
    public String extendedPurpose;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withExtendedPurpose(String extendedPurpose) {
        this.extendedPurpose = extendedPurpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinalPaymentDateTime")
    public OffsetDateTime finalPaymentDateTime;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withFinalPaymentDateTime(OffsetDateTime finalPaymentDateTime) {
        this.finalPaymentDateTime = finalPaymentDateTime;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("FirstPaymentDateTime")
    public OffsetDateTime firstPaymentDateTime;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withFirstPaymentDateTime(OffsetDateTime firstPaymentDateTime) {
        this.firstPaymentDateTime = firstPaymentDateTime;
        return this;
    }
    @JsonProperty("Frequency")
    public String frequency;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount instructedAmount;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withInstructedAmount(ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfPayments")
    public String numberOfPayments;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withNumberOfPayments(String numberOfPayments) {
        this.numberOfPayments = numberOfPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Purpose")
    public String purpose;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteInternationalStandingOrderResponse7DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}