package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PayeePayorRef {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitationStatus")
    public InvitationStatusEnum invitationStatus;
    public PayeePayorRef withInvitationStatus(InvitationStatusEnum invitationStatus) {
        this.invitationStatus = invitationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("invitationStatusTimestamp")
    public OffsetDateTime invitationStatusTimestamp;
    public PayeePayorRef withInvitationStatusTimestamp(OffsetDateTime invitationStatusTimestamp) {
        this.invitationStatusTimestamp = invitationStatusTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payableIssues")
    public PayableIssue2[] payableIssues;
    public PayeePayorRef withPayableIssues(PayableIssue2[] payableIssues) {
        this.payableIssues = payableIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payableStatus")
    public Boolean payableStatus;
    public PayeePayorRef withPayableStatus(Boolean payableStatus) {
        this.payableStatus = payableStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelId")
    public String paymentChannelId;
    public PayeePayorRef withPaymentChannelId(String paymentChannelId) {
        this.paymentChannelId = paymentChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public PayeePayorRef withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;
    public PayeePayorRef withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
}