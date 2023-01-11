package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserInvitation
 * The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.
**/
public class UserInvitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailsSentCount")
    public String mailsSentCount;
    public UserInvitation withMailsSentCount(String mailsSentCount) {
        this.mailsSentCount = mailsSentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserInvitation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public UserInvitationStateEnum state;
    public UserInvitation withState(UserInvitationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public UserInvitation withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}