package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAuthPoll200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apikey")
    public String apikey;
    public PostAuthPoll200ApplicationJson withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public PostAuthPoll200ApplicationJson withUsername(String username) {
        this.username = username;
        return this;
    }
}