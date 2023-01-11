package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SelfUpdatePasswordRequest {
    @JsonProperty("newPassword")
    public String newPassword;
    public SelfUpdatePasswordRequest withNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    @JsonProperty("oldPassword")
    public String oldPassword;
    public SelfUpdatePasswordRequest withOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
}