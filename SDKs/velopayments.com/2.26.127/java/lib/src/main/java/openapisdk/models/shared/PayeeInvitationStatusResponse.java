package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayeeInvitationStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracePeriodEndDate")
    public LocalDate gracePeriodEndDate;
    public PayeeInvitationStatusResponse withGracePeriodEndDate(LocalDate gracePeriodEndDate) {
        this.gracePeriodEndDate = gracePeriodEndDate;
        return this;
    }
    @JsonProperty("invitationStatus")
    public PayeeInvitationStatusResponseInvitationStatusEnum invitationStatus;
    public PayeeInvitationStatusResponse withInvitationStatus(PayeeInvitationStatusResponseInvitationStatusEnum invitationStatus) {
        this.invitationStatus = invitationStatus;
        return this;
    }
    @JsonProperty("payeeId")
    public String payeeId;
    public PayeeInvitationStatusResponse withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}