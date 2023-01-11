package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteDomesticConsentResponse5DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
public class ObWriteDomesticConsentResponse5DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomesticConsentResponse5DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomesticConsentResponse5DataInitiation withCreditorAccount(ObWriteDomesticConsentResponse5DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorPostalAddress")
    public ObPostalAddress6 creditorPostalAddress;
    public ObWriteDomesticConsentResponse5DataInitiation withCreditorPostalAddress(ObPostalAddress6 creditorPostalAddress) {
        this.creditorPostalAddress = creditorPostalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomesticConsentResponse5DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomesticConsentResponse5DataInitiation withDebtorAccount(ObWriteDomesticConsentResponse5DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteDomesticConsentResponse5DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteDomesticConsentResponse5DataInitiationInstructedAmount instructedAmount;
    public ObWriteDomesticConsentResponse5DataInitiation withInstructedAmount(ObWriteDomesticConsentResponse5DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteDomesticConsentResponse5DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteDomesticConsentResponse5DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteDomesticConsentResponse5DataInitiation withRemittanceInformation(ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomesticConsentResponse5DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}