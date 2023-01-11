package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PayeePayorRefV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitationStatus")
    public InvitationStatus2Enum invitationStatus;
    public PayeePayorRefV3 withInvitationStatus(InvitationStatus2Enum invitationStatus) {
        this.invitationStatus = invitationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("invitationStatusTimestamp")
    public OffsetDateTime invitationStatusTimestamp;
    public PayeePayorRefV3 withInvitationStatusTimestamp(OffsetDateTime invitationStatusTimestamp) {
        this.invitationStatusTimestamp = invitationStatusTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payableIssues")
    public PayableIssue[] payableIssues;
    public PayeePayorRefV3 withPayableIssues(PayableIssue[] payableIssues) {
        this.payableIssues = payableIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payableStatus")
    public Boolean payableStatus;
    public PayeePayorRefV3 withPayableStatus(Boolean payableStatus) {
        this.payableStatus = payableStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelId")
    public String paymentChannelId;
    public PayeePayorRefV3 withPaymentChannelId(String paymentChannelId) {
        this.paymentChannelId = paymentChannelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public PayeePayorRefV3 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteId")
    public String remoteId;
    public PayeePayorRefV3 withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
}