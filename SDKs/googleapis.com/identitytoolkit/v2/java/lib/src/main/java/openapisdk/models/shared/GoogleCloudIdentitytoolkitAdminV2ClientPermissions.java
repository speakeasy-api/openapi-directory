package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2ClientPermissions
 * Configuration related to restricting a user's ability to affect their account.
**/
public class GoogleCloudIdentitytoolkitAdminV2ClientPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledUserDeletion")
    public Boolean disabledUserDeletion;
    public GoogleCloudIdentitytoolkitAdminV2ClientPermissions withDisabledUserDeletion(Boolean disabledUserDeletion) {
        this.disabledUserDeletion = disabledUserDeletion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledUserSignup")
    public Boolean disabledUserSignup;
    public GoogleCloudIdentitytoolkitAdminV2ClientPermissions withDisabledUserSignup(Boolean disabledUserSignup) {
        this.disabledUserSignup = disabledUserSignup;
        return this;
    }
}