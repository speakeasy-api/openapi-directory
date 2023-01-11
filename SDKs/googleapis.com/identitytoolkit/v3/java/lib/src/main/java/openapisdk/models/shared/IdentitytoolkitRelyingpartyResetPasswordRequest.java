package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyResetPasswordRequest
 * Request to reset the password.
**/
public class IdentitytoolkitRelyingpartyResetPasswordRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public IdentitytoolkitRelyingpartyResetPasswordRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newPassword")
    public String newPassword;
    public IdentitytoolkitRelyingpartyResetPasswordRequest withNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldPassword")
    public String oldPassword;
    public IdentitytoolkitRelyingpartyResetPasswordRequest withOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oobCode")
    public String oobCode;
    public IdentitytoolkitRelyingpartyResetPasswordRequest withOobCode(String oobCode) {
        this.oobCode = oobCode;
        return this;
    }
}