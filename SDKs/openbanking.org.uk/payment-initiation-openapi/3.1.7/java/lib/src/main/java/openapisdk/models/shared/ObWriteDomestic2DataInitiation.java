package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteDomestic2DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
public class ObWriteDomestic2DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomestic2DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomestic2DataInitiation withCreditorAccount(ObWriteDomestic2DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorPostalAddress")
    public ObPostalAddress6 creditorPostalAddress;
    public ObWriteDomestic2DataInitiation withCreditorPostalAddress(ObPostalAddress6 creditorPostalAddress) {
        this.creditorPostalAddress = creditorPostalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomestic2DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomestic2DataInitiation withDebtorAccount(ObWriteDomestic2DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteDomestic2DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteDomestic2DataInitiationInstructedAmount instructedAmount;
    public ObWriteDomestic2DataInitiation withInstructedAmount(ObWriteDomestic2DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteDomestic2DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteDomestic2DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteDomestic2DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteDomestic2DataInitiation withRemittanceInformation(ObWriteDomestic2DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomestic2DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}