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
 * ObWriteDomesticScheduledResponse5DataInitiation
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
public class ObWriteDomesticScheduledResponse5DataInitiation {
    @JsonProperty("CreditorAccount")
    public ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount creditorAccount;
    public ObWriteDomesticScheduledResponse5DataInitiation withCreditorAccount(ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorPostalAddress")
    public ObPostalAddress6 creditorPostalAddress;
    public ObWriteDomesticScheduledResponse5DataInitiation withCreditorPostalAddress(ObPostalAddress6 creditorPostalAddress) {
        this.creditorPostalAddress = creditorPostalAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DebtorAccount")
    public ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount debtorAccount;
    public ObWriteDomesticScheduledResponse5DataInitiation withDebtorAccount(ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount debtorAccount) {
        this.debtorAccount = debtorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndToEndIdentification")
    public String endToEndIdentification;
    public ObWriteDomesticScheduledResponse5DataInitiation withEndToEndIdentification(String endToEndIdentification) {
        this.endToEndIdentification = endToEndIdentification;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount instructedAmount;
    public ObWriteDomesticScheduledResponse5DataInitiation withInstructedAmount(ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("InstructionIdentification")
    public String instructionIdentification;
    public ObWriteDomesticScheduledResponse5DataInitiation withInstructionIdentification(String instructionIdentification) {
        this.instructionIdentification = instructionIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWriteDomesticScheduledResponse5DataInitiation withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemittanceInformation")
    public ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation remittanceInformation;
    public ObWriteDomesticScheduledResponse5DataInitiation withRemittanceInformation(ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation remittanceInformation) {
        this.remittanceInformation = remittanceInformation;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("RequestedExecutionDateTime")
    public OffsetDateTime requestedExecutionDateTime;
    public ObWriteDomesticScheduledResponse5DataInitiation withRequestedExecutionDateTime(OffsetDateTime requestedExecutionDateTime) {
        this.requestedExecutionDateTime = requestedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryData")
    public java.util.Map<String, Object> supplementaryData;
    public ObWriteDomesticScheduledResponse5DataInitiation withSupplementaryData(java.util.Map<String, Object> supplementaryData) {
        this.supplementaryData = supplementaryData;
        return this;
    }
}