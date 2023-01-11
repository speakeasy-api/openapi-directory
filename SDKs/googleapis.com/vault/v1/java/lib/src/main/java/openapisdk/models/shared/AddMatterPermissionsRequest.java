package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddMatterPermissionsRequest
 * Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
**/
public class AddMatterPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccMe")
    public Boolean ccMe;
    public AddMatterPermissionsRequest withCcMe(Boolean ccMe) {
        this.ccMe = ccMe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matterPermission")
    public MatterPermission matterPermission;
    public AddMatterPermissionsRequest withMatterPermission(MatterPermission matterPermission) {
        this.matterPermission = matterPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendEmails")
    public Boolean sendEmails;
    public AddMatterPermissionsRequest withSendEmails(Boolean sendEmails) {
        this.sendEmails = sendEmails;
        return this;
    }
}