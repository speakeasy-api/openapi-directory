package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCheckRequestBody {
    @JsonProperty("token")
    public String token;
    public PostCheckRequestBody withToken(String token) {
        this.token = token;
        return this;
    }
}