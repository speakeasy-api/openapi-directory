package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PasswordUpdateContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public PasswordUpdateContent withPassword(String password) {
        this.password = password;
        return this;
    }
}