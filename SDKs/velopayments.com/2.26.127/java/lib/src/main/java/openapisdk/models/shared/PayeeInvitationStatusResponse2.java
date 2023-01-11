package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayeeInvitationStatusResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracePeriodEndDate")
    public LocalDate gracePeriodEndDate;
    public PayeeInvitationStatusResponse2 withGracePeriodEndDate(LocalDate gracePeriodEndDate) {
        this.gracePeriodEndDate = gracePeriodEndDate;
        return this;
    }
    @JsonProperty("invitationStatus")
    public PayeeInvitationStatusResponse2InvitationStatusEnum invitationStatus;
    public PayeeInvitationStatusResponse2 withInvitationStatus(PayeeInvitationStatusResponse2InvitationStatusEnum invitationStatus) {
        this.invitationStatus = invitationStatus;
        return this;
    }
    @JsonProperty("payeeId")
    public String payeeId;
    public PayeeInvitationStatusResponse2 withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}