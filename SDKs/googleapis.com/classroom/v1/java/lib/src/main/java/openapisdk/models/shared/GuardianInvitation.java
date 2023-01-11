package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuardianInvitation
 * An invitation to become the guardian of a specified user, sent to a specified email address.
**/
public class GuardianInvitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public GuardianInvitation withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitationId")
    public String invitationId;
    public GuardianInvitation withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitedEmailAddress")
    public String invitedEmailAddress;
    public GuardianInvitation withInvitedEmailAddress(String invitedEmailAddress) {
        this.invitedEmailAddress = invitedEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GuardianInvitationStateEnum state;
    public GuardianInvitation withState(GuardianInvitationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studentId")
    public String studentId;
    public GuardianInvitation withStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }
}