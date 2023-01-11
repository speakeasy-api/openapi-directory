package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Requests {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public String request;
    public Requests withRequest(String request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public Requests withResponse(String response) {
        this.response = response;
        return this;
    }
}