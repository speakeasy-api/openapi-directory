package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HooksGet200ApplicationJsonHooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public HooksGet200ApplicationJsonHooks withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_type")
    public String eventType;
    public HooksGet200ApplicationJsonHooks withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HooksGet200ApplicationJsonHooks withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_method")
    public String requestMethod;
    public HooksGet200ApplicationJsonHooks withRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_url")
    public String targetUrl;
    public HooksGet200ApplicationJsonHooks withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}