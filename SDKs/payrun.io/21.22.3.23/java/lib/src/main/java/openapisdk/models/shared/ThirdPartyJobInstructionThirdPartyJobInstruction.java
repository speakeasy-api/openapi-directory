package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ThirdPartyJobInstructionThirdPartyJobInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientIdUniqueKey")
    public String clientIdUniqueKey;
    public ThirdPartyJobInstructionThirdPartyJobInstruction withClientIdUniqueKey(String clientIdUniqueKey) {
        this.clientIdUniqueKey = clientIdUniqueKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientSecretUniqueKey")
    public String clientSecretUniqueKey;
    public ThirdPartyJobInstructionThirdPartyJobInstruction withClientSecretUniqueKey(String clientSecretUniqueKey) {
        this.clientSecretUniqueKey = clientSecretUniqueKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employer")
    public ThirdPartyJobInstructionThirdPartyJobInstructionEmployer employer;
    public ThirdPartyJobInstructionThirdPartyJobInstruction withEmployer(ThirdPartyJobInstructionThirdPartyJobInstructionEmployer employer) {
        this.employer = employer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("HoldingDate")
    public OffsetDateTime holdingDate;
    public ThirdPartyJobInstructionThirdPartyJobInstruction withHoldingDate(OffsetDateTime holdingDate) {
        this.holdingDate = holdingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstructionTypeName")
    public String instructionTypeName;
    public ThirdPartyJobInstructionThirdPartyJobInstruction withInstructionTypeName(String instructionTypeName) {
        this.instructionTypeName = instructionTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayScheduleUniqueKey")
    public String payScheduleUniqueKey;
    public ThirdPartyJobInstructionThirdPartyJobInstruction withPayScheduleUniqueKey(String payScheduleUniqueKey) {
        this.payScheduleUniqueKey = payScheduleUniqueKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("PaymentDate")
    public OffsetDateTime paymentDate;
    public ThirdPartyJobInstructionThirdPartyJobInstruction withPaymentDate(OffsetDateTime paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoteEndpoint")
    public String remoteEndpoint;
    public ThirdPartyJobInstructionThirdPartyJobInstruction withRemoteEndpoint(String remoteEndpoint) {
        this.remoteEndpoint = remoteEndpoint;
        return this;
    }
}