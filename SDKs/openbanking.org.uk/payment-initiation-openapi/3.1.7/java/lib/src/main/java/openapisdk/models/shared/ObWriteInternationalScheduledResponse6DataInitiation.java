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
 * ObWriteInternationalScheduledResponse6DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
public class ObWriteInternationalScheduledResponse6DataInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalScheduledResponse6DataInitiation withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalScheduledResponse6DataInitiationCreditor creditor;
    public ObWriteInternationalScheduledResponse6DataInitiation withCreditor(ObWriteInternationalScheduledResponse6DataInitiationCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
    @JsonProperty("CreditorAccount")
    public ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount creditorAccount;
    public ObWriteInternationalScheduledResponse6DataInitiation withCreditorAccount(ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAgent")
    public ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent creditorAgent;
    public ObWriteInternationalScheduledResponse6DataInitiation withCreditorAgent(ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonProperty("CurrencyOfTransfer")
    public String currencyOfTransfer;
    public ObWriteInternationalScheduledResponse6DataInitiation withCurrencyOfTransfer(String currencyOfTransfer) {
        this.currencyOfTransfer = currencyOfTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount debtorAccount;
    public ObWriteInternationalScheduledResponse6DataInitiation withDebtorAccount(ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCountryCode")
    public String destinationCountryCode;
    public ObWriteInternationalScheduledResponse6DataInitiation withDestinationCountryCode(String destinationCountryCode) {
        this.destinationCountryCode = destinationCountryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteInternationalScheduledResponse6DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateInformation")
    public ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation exchangeRateInformation;
    public ObWriteInternationalScheduledResponse6DataInitiation withExchangeRateInformation(ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation exchangeRateInformation) {
        this.exchangeRateInformation = exchangeRateInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedPurpose")
    public String extendedPurpose;
    public ObWriteInternationalScheduledResponse6DataInitiation withExtendedPurpose(String extendedPurpose) {
        this.extendedPurpose = extendedPurpose;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount instructedAmount;
    public ObWriteInternationalScheduledResponse6DataInitiation withInstructedAmount(ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteInternationalScheduledResponse6DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstructionPriority")
    public ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum instructionPriority;
    public ObWriteInternationalScheduledResponse6DataInitiation withInstructionPriority(ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum instructionPriority) {
        this.instructionPriority = instructionPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteInternationalScheduledResponse6DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Purpose")
    public String purpose;
    public ObWriteInternationalScheduledResponse6DataInitiation withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteInternationalScheduledResponse6DataInitiation withRemittanceInformation(ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("RequestedExecutionDateTime")
    public OffsetDateTime requestedExecutionDateTime;
    public ObWriteInternationalScheduledResponse6DataInitiation withRequestedExecutionDateTime(OffsetDateTime requestedExecutionDateTime) {
        this.requestedExecutionDateTime = requestedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteInternationalScheduledResponse6DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}