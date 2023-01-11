package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventRetrieved
 * Retrieve Events Response Payload Object Item
**/
public class EventRetrieved {
    @JsonProperty("body")
    public java.util.Map<String, Object> body;
    public EventRetrieved withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public EventRetrieved withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("href")
    public String href;
    public EventRetrieved withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public EventRetrieved withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MemberStateEnum state;
    public EventRetrieved withState(MemberStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("timestamp")
    public String timestamp;
    public EventRetrieved withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public EventRetrieved withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EventRetrieved withType(String type) {
        this.type = type;
        return this;
    }
}