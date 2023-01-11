package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Event withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public Object payload;
    public Event withPayload(Object payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public Event withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_event")
    public String timeEvent;
    public Event withTimeEvent(String timeEvent) {
        this.timeEvent = timeEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_expire")
    public String timeExpire;
    public Event withTimeExpire(String timeExpire) {
        this.timeExpire = timeExpire;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public EventTopic topic;
    public Event withTopic(EventTopic topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Event withUrl(String url) {
        this.url = url;
        return this;
    }
}