package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChangePasswordRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newPassword")
    public ChangePasswordRequestBodyNewPassword newPassword;
    public ChangePasswordRequestBody withNewPassword(ChangePasswordRequestBodyNewPassword newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldPassword")
    public ChangePasswordRequestBodyOldPassword oldPassword;
    public ChangePasswordRequestBody withOldPassword(ChangePasswordRequestBodyOldPassword oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
}