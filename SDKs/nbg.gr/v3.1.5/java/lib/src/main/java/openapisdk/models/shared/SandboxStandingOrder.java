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
 * SandboxStandingOrder
 * Standing order information
**/
public class SandboxStandingOrder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public SandboxStandingOrder withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SandboxStandingOrder withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("finalPaymentDate")
    public OffsetDateTime finalPaymentDate;
    public SandboxStandingOrder withFinalPaymentDate(OffsetDateTime finalPaymentDate) {
        this.finalPaymentDate = finalPaymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("firstPaymentDate")
    public OffsetDateTime firstPaymentDate;
    public SandboxStandingOrder withFirstPaymentDate(OffsetDateTime firstPaymentDate) {
        this.firstPaymentDate = firstPaymentDate;
        return this;
    }
    @JsonProperty("frequency")
    public String frequency;
    public SandboxStandingOrder withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastPaymentDate")
    public OffsetDateTime lastPaymentDate;
    public SandboxStandingOrder withLastPaymentDate(OffsetDateTime lastPaymentDate) {
        this.lastPaymentDate = lastPaymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("nextPaymentDate")
    public OffsetDateTime nextPaymentDate;
    public SandboxStandingOrder withNextPaymentDate(OffsetDateTime nextPaymentDate) {
        this.nextPaymentDate = nextPaymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public SandboxStandingOrder withStatus(String status) {
        this.status = status;
        return this;
    }
}