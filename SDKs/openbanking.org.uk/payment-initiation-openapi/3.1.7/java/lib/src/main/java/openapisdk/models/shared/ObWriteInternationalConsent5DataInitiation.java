package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalConsent5DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
public class ObWriteInternationalConsent5DataInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalConsent5DataInitiation withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalConsent5DataInitiationCreditor creditor;
    public ObWriteInternationalConsent5DataInitiation withCreditor(ObWriteInternationalConsent5DataInitiationCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
    @JsonProperty("CreditorAccount")
    public ObWriteInternationalConsent5DataInitiationCreditorAccount creditorAccount;
    public ObWriteInternationalConsent5DataInitiation withCreditorAccount(ObWriteInternationalConsent5DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAgent")
    public ObWriteInternationalConsent5DataInitiationCreditorAgent creditorAgent;
    public ObWriteInternationalConsent5DataInitiation withCreditorAgent(ObWriteInternationalConsent5DataInitiationCreditorAgent creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonProperty("CurrencyOfTransfer")
    public String currencyOfTransfer;
    public ObWriteInternationalConsent5DataInitiation withCurrencyOfTransfer(String currencyOfTransfer) {
        this.currencyOfTransfer = currencyOfTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteInternationalConsent5DataInitiationDebtorAccount debtorAccount;
    public ObWriteInternationalConsent5DataInitiation withDebtorAccount(ObWriteInternationalConsent5DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCountryCode")
    public String destinationCountryCode;
    public ObWriteInternationalConsent5DataInitiation withDestinationCountryCode(String destinationCountryCode) {
        this.destinationCountryCode = destinationCountryCode;
        return this;
    }
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteInternationalConsent5DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateInformation")
    public ObWriteInternationalConsent5DataInitiationExchangeRateInformation exchangeRateInformation;
    public ObWriteInternationalConsent5DataInitiation withExchangeRateInformation(ObWriteInternationalConsent5DataInitiationExchangeRateInformation exchangeRateInformation) {
        this.exchangeRateInformation = exchangeRateInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedPurpose")
    public String extendedPurpose;
    public ObWriteInternationalConsent5DataInitiation withExtendedPurpose(String extendedPurpose) {
        this.extendedPurpose = extendedPurpose;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteInternationalConsent5DataInitiationInstructedAmount instructedAmount;
    public ObWriteInternationalConsent5DataInitiation withInstructedAmount(ObWriteInternationalConsent5DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteInternationalConsent5DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstructionPriority")
    public ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum instructionPriority;
    public ObWriteInternationalConsent5DataInitiation withInstructionPriority(ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum instructionPriority) {
        this.instructionPriority = instructionPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteInternationalConsent5DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Purpose")
    public String purpose;
    public ObWriteInternationalConsent5DataInitiation withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteInternationalConsent5DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteInternationalConsent5DataInitiation withRemittanceInformation(ObWriteInternationalConsent5DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteInternationalConsent5DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}