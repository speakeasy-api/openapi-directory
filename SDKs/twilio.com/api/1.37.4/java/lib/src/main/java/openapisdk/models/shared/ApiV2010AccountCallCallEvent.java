package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountCallCallEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public Object request;
    public ApiV2010AccountCallCallEvent withRequest(Object request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public Object response;
    public ApiV2010AccountCallCallEvent withResponse(Object response) {
        this.response = response;
        return this;
    }
}