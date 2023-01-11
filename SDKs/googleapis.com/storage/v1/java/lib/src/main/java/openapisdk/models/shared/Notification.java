package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Notification
 * A subscription to receive Google PubSub notifications.
**/
public class Notification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_attributes")
    public java.util.Map<String, String> customAttributes;
    public Notification withCustomAttributes(java.util.Map<String, String> customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Notification withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_types")
    public String[] eventTypes;
    public Notification withEventTypes(String[] eventTypes) {
        this.eventTypes = eventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Notification withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Notification withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_name_prefix")
    public String objectNamePrefix;
    public Notification withObjectNamePrefix(String objectNamePrefix) {
        this.objectNamePrefix = objectNamePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload_format")
    public String payloadFormat;
    public Notification withPayloadFormat(String payloadFormat) {
        this.payloadFormat = payloadFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Notification withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public Notification withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}