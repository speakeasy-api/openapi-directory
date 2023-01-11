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
 * ObWriteInternationalScheduledConsent5DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
public class ObWriteInternationalScheduledConsent5DataInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalScheduledConsent5DataInitiation withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalScheduledConsent5DataInitiationCreditor creditor;
    public ObWriteInternationalScheduledConsent5DataInitiation withCreditor(ObWriteInternationalScheduledConsent5DataInitiationCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
    @JsonProperty("CreditorAccount")
    public ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount creditorAccount;
    public ObWriteInternationalScheduledConsent5DataInitiation withCreditorAccount(ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAgent")
    public ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent creditorAgent;
    public ObWriteInternationalScheduledConsent5DataInitiation withCreditorAgent(ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonProperty("CurrencyOfTransfer")
    public String currencyOfTransfer;
    public ObWriteInternationalScheduledConsent5DataInitiation withCurrencyOfTransfer(String currencyOfTransfer) {
        this.currencyOfTransfer = currencyOfTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount debtorAccount;
    public ObWriteInternationalScheduledConsent5DataInitiation withDebtorAccount(ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCountryCode")
    public String destinationCountryCode;
    public ObWriteInternationalScheduledConsent5DataInitiation withDestinationCountryCode(String destinationCountryCode) {
        this.destinationCountryCode = destinationCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteInternationalScheduledConsent5DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateInformation")
    public ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation exchangeRateInformation;
    public ObWriteInternationalScheduledConsent5DataInitiation withExchangeRateInformation(ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation exchangeRateInformation) {
        this.exchangeRateInformation = exchangeRateInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedPurpose")
    public String extendedPurpose;
    public ObWriteInternationalScheduledConsent5DataInitiation withExtendedPurpose(String extendedPurpose) {
        this.extendedPurpose = extendedPurpose;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount instructedAmount;
    public ObWriteInternationalScheduledConsent5DataInitiation withInstructedAmount(ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteInternationalScheduledConsent5DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstructionPriority")
    public ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum instructionPriority;
    public ObWriteInternationalScheduledConsent5DataInitiation withInstructionPriority(ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum instructionPriority) {
        this.instructionPriority = instructionPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteInternationalScheduledConsent5DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Purpose")
    public String purpose;
    public ObWriteInternationalScheduledConsent5DataInitiation withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteInternationalScheduledConsent5DataInitiation withRemittanceInformation(ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("RequestedExecutionDateTime")
    public OffsetDateTime requestedExecutionDateTime;
    public ObWriteInternationalScheduledConsent5DataInitiation withRequestedExecutionDateTime(OffsetDateTime requestedExecutionDateTime) {
        this.requestedExecutionDateTime = requestedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteInternationalScheduledConsent5DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}