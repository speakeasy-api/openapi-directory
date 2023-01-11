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
 * ObWriteDomesticScheduledConsentResponse5DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
public class ObWriteDomesticScheduledConsentResponse5DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withCreditorAccount(ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorPostalAddress")
    public ObPostalAddress6 creditorPostalAddress;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withCreditorPostalAddress(ObPostalAddress6 creditorPostalAddress) {
        this.creditorPostalAddress = creditorPostalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withDebtorAccount(ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount instructedAmount;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withInstructedAmount(ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withRemittanceInformation(ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("RequestedExecutionDateTime")
    public OffsetDateTime requestedExecutionDateTime;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withRequestedExecutionDateTime(OffsetDateTime requestedExecutionDateTime) {
        this.requestedExecutionDateTime = requestedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomesticScheduledConsentResponse5DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}