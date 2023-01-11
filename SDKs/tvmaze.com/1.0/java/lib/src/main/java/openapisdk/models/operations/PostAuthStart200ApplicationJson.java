package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAuthStart200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirm_url")
    public String confirmUrl;
    public PostAuthStart200ApplicationJson withConfirmUrl(String confirmUrl) {
        this.confirmUrl = confirmUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public PostAuthStart200ApplicationJson withToken(String token) {
        this.token = token;
        return this;
    }
}