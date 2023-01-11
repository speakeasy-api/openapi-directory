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
 * ObWriteDomesticScheduledConsent4DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
public class ObWriteDomesticScheduledConsent4DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomesticScheduledConsent4DataInitiation withCreditorAccount(ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorPostalAddress")
    public ObPostalAddress6 creditorPostalAddress;
    public ObWriteDomesticScheduledConsent4DataInitiation withCreditorPostalAddress(ObPostalAddress6 creditorPostalAddress) {
        this.creditorPostalAddress = creditorPostalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomesticScheduledConsent4DataInitiation withDebtorAccount(ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteDomesticScheduledConsent4DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount instructedAmount;
    public ObWriteDomesticScheduledConsent4DataInitiation withInstructedAmount(ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteDomesticScheduledConsent4DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteDomesticScheduledConsent4DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteDomesticScheduledConsent4DataInitiation withRemittanceInformation(ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("RequestedExecutionDateTime")
    public OffsetDateTime requestedExecutionDateTime;
    public ObWriteDomesticScheduledConsent4DataInitiation withRequestedExecutionDateTime(OffsetDateTime requestedExecutionDateTime) {
        this.requestedExecutionDateTime = requestedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomesticScheduledConsent4DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}