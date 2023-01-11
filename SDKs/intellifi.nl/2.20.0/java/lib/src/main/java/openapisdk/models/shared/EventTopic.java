package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventTopic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public EventTopicActionEnum action;
    public EventTopic withAction(EventTopicActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arguments")
    public Object arguments;
    public EventTopic withArguments(Object arguments) {
        this.arguments = arguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public String resourceId;
    public EventTopic withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public EventTopicResourceTypeEnum resourceType;
    public EventTopic withResourceType(EventTopicResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_url")
    public String resourceUrl;
    public EventTopic withResourceUrl(String resourceUrl) {
        this.resourceUrl = resourceUrl;
        return this;
    }
}