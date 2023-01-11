package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObFundsConfirmationResponse1Data {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObFundsConfirmationResponse1Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObFundsConfirmationResponse1Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonProperty("FundsAvailable")
    public Boolean fundsAvailable;
    public ObFundsConfirmationResponse1Data withFundsAvailable(Boolean fundsAvailable) {
        this.fundsAvailable = fundsAvailable;
        return this;
    }
    @JsonProperty("FundsConfirmationId")
    public String fundsConfirmationId;
    public ObFundsConfirmationResponse1Data withFundsConfirmationId(String fundsConfirmationId) {
        this.fundsConfirmationId = fundsConfirmationId;
        return this;
    }
    @JsonProperty("InstructedAmount")
    public ObFundsConfirmationResponse1DataInstructedAmount instructedAmount;
    public ObFundsConfirmationResponse1Data withInstructedAmount(ObFundsConfirmationResponse1DataInstructedAmount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonProperty("Reference")
    public String reference;
    public ObFundsConfirmationResponse1Data withReference(String reference) {
        this.reference = reference;
        return this;
    }
}