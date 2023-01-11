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
 * SandboxScheduledPayment
 * Scheduled payment information
**/
public class SandboxScheduledPayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public SandboxScheduledPayment withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SandboxScheduledPayment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("executionDate")
    public OffsetDateTime executionDate;
    public SandboxScheduledPayment withExecutionDate(OffsetDateTime executionDate) {
        this.executionDate = executionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senderReference")
    public String senderReference;
    public SandboxScheduledPayment withSenderReference(String senderReference) {
        this.senderReference = senderReference;
        return this;
    }
}