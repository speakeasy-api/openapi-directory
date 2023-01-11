package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Example12 {
    @JsonProperty("token")
    public String token;
    public Example12 withToken(String token) {
        this.token = token;
        return this;
    }
}