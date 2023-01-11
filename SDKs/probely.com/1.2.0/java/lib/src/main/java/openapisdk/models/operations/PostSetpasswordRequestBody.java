package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostSetpasswordRequestBody {
    @JsonProperty("confpassword")
    public java.util.Map<String, Object> confpassword;
    public PostSetpasswordRequestBody withConfpassword(java.util.Map<String, Object> confpassword) {
        this.confpassword = confpassword;
        return this;
    }
    @JsonProperty("password")
    public java.util.Map<String, Object> password;
    public PostSetpasswordRequestBody withPassword(java.util.Map<String, Object> password) {
        this.password = password;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public PostSetpasswordRequestBody withToken(String token) {
        this.token = token;
        return this;
    }
}