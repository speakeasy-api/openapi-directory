package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEventRequestBody
 * Create New Event Request Payload Object
**/
public class CreateEventRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public java.util.Map<String, Object> body;
    public CreateEventRequestBody withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public CreateEventRequestBody withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CreateEventRequestBody withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CreateEventRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}