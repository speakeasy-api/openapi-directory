package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostProfileChangePasswordRequestBody {
    @JsonProperty("confpassword")
    public java.util.Map<String, Object> confpassword;
    public PostProfileChangePasswordRequestBody withConfpassword(java.util.Map<String, Object> confpassword) {
        this.confpassword = confpassword;
        return this;
    }
    @JsonProperty("current_password")
    public java.util.Map<String, Object> currentPassword;
    public PostProfileChangePasswordRequestBody withCurrentPassword(java.util.Map<String, Object> currentPassword) {
        this.currentPassword = currentPassword;
        return this;
    }
    @JsonProperty("password")
    public java.util.Map<String, Object> password;
    public PostProfileChangePasswordRequestBody withPassword(java.util.Map<String, Object> password) {
        this.password = password;
        return this;
    }
}