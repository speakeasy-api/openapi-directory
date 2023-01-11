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
 * ObWriteInternationalScheduled3DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
public class ObWriteInternationalScheduled3DataInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalScheduled3DataInitiation withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalScheduled3DataInitiationCreditor creditor;
    public ObWriteInternationalScheduled3DataInitiation withCreditor(ObWriteInternationalScheduled3DataInitiationCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
    @JsonProperty("CreditorAccount")
    public ObWriteInternationalScheduled3DataInitiationCreditorAccount creditorAccount;
    public ObWriteInternationalScheduled3DataInitiation withCreditorAccount(ObWriteInternationalScheduled3DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAgent")
    public ObWriteInternationalScheduled3DataInitiationCreditorAgent creditorAgent;
    public ObWriteInternationalScheduled3DataInitiation withCreditorAgent(ObWriteInternationalScheduled3DataInitiationCreditorAgent creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonProperty("CurrencyOfTransfer")
    public String currencyOfTransfer;
    public ObWriteInternationalScheduled3DataInitiation withCurrencyOfTransfer(String currencyOfTransfer) {
        this.currencyOfTransfer = currencyOfTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteInternationalScheduled3DataInitiationDebtorAccount debtorAccount;
    public ObWriteInternationalScheduled3DataInitiation withDebtorAccount(ObWriteInternationalScheduled3DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCountryCode")
    public String destinationCountryCode;
    public ObWriteInternationalScheduled3DataInitiation withDestinationCountryCode(String destinationCountryCode) {
        this.destinationCountryCode = destinationCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteInternationalScheduled3DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateInformation")
    public ObWriteInternationalScheduled3DataInitiationExchangeRateInformation exchangeRateInformation;
    public ObWriteInternationalScheduled3DataInitiation withExchangeRateInformation(ObWriteInternationalScheduled3DataInitiationExchangeRateInformation exchangeRateInformation) {
        this.exchangeRateInformation = exchangeRateInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedPurpose")
    public String extendedPurpose;
    public ObWriteInternationalScheduled3DataInitiation withExtendedPurpose(String extendedPurpose) {
        this.extendedPurpose = extendedPurpose;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteInternationalScheduled3DataInitiationInstructedAmount instructedAmount;
    public ObWriteInternationalScheduled3DataInitiation withInstructedAmount(ObWriteInternationalScheduled3DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteInternationalScheduled3DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstructionPriority")
    public ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum instructionPriority;
    public ObWriteInternationalScheduled3DataInitiation withInstructionPriority(ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum instructionPriority) {
        this.instructionPriority = instructionPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteInternationalScheduled3DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Purpose")
    public String purpose;
    public ObWriteInternationalScheduled3DataInitiation withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteInternationalScheduled3DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteInternationalScheduled3DataInitiation withRemittanceInformation(ObWriteInternationalScheduled3DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("RequestedExecutionDateTime")
    public OffsetDateTime requestedExecutionDateTime;
    public ObWriteInternationalScheduled3DataInitiation withRequestedExecutionDateTime(OffsetDateTime requestedExecutionDateTime) {
        this.requestedExecutionDateTime = requestedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteInternationalScheduled3DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}