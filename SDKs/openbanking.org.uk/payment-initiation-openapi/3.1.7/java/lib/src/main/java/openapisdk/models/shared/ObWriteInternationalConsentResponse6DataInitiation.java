package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalConsentResponse6DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
public class ObWriteInternationalConsentResponse6DataInitiation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChargeBearer")
    public ObChargeBearerType1CodeEnum chargeBearer;
    public ObWriteInternationalConsentResponse6DataInitiation withChargeBearer(ObChargeBearerType1CodeEnum chargeBearer) {
        this.chargeBearer = chargeBearer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Creditor")
    public ObWriteInternationalConsentResponse6DataInitiationCreditor creditor;
    public ObWriteInternationalConsentResponse6DataInitiation withCreditor(ObWriteInternationalConsentResponse6DataInitiationCreditor creditor) {
        this.creditor = creditor;
        return this;
    }
    @JsonProperty("CreditorAccount")
    public ObWriteInternationalConsentResponse6DataInitiationCreditorAccount creditorAccount;
    public ObWriteInternationalConsentResponse6DataInitiation withCreditorAccount(ObWriteInternationalConsentResponse6DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAgent")
    public ObWriteInternationalConsentResponse6DataInitiationCreditorAgent creditorAgent;
    public ObWriteInternationalConsentResponse6DataInitiation withCreditorAgent(ObWriteInternationalConsentResponse6DataInitiationCreditorAgent creditorAgent) {
        this.creditorAgent = creditorAgent;
        return this;
    }
    @JsonProperty("CurrencyOfTransfer")
    public String currencyOfTransfer;
    public ObWriteInternationalConsentResponse6DataInitiation withCurrencyOfTransfer(String currencyOfTransfer) {
        this.currencyOfTransfer = currencyOfTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteInternationalConsentResponse6DataInitiationDebtorAccount debtorAccount;
    public ObWriteInternationalConsentResponse6DataInitiation withDebtorAccount(ObWriteInternationalConsentResponse6DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationCountryCode")
    public String destinationCountryCode;
    public ObWriteInternationalConsentResponse6DataInitiation withDestinationCountryCode(String destinationCountryCode) {
        this.destinationCountryCode = destinationCountryCode;
        return this;
    }
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteInternationalConsentResponse6DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateInformation")
    public ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation exchangeRateInformation;
    public ObWriteInternationalConsentResponse6DataInitiation withExchangeRateInformation(ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation exchangeRateInformation) {
        this.exchangeRateInformation = exchangeRateInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedPurpose")
    public String extendedPurpose;
    public ObWriteInternationalConsentResponse6DataInitiation withExtendedPurpose(String extendedPurpose) {
        this.extendedPurpose = extendedPurpose;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteInternationalConsentResponse6DataInitiationInstructedAmount instructedAmount;
    public ObWriteInternationalConsentResponse6DataInitiation withInstructedAmount(ObWriteInternationalConsentResponse6DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteInternationalConsentResponse6DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstructionPriority")
    public ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum instructionPriority;
    public ObWriteInternationalConsentResponse6DataInitiation withInstructionPriority(ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum instructionPriority) {
        this.instructionPriority = instructionPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteInternationalConsentResponse6DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Purpose")
    public String purpose;
    public ObWriteInternationalConsentResponse6DataInitiation withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteInternationalConsentResponse6DataInitiation withRemittanceInformation(ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteInternationalConsentResponse6DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}