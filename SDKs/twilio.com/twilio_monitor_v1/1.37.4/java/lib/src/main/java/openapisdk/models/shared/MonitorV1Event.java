package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MonitorV1Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MonitorV1Event withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor_sid")
    public String actorSid;
    public MonitorV1Event withActorSid(String actorSid) {
        this.actorSid = actorSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor_type")
    public String actorType;
    public MonitorV1Event withActorType(String actorType) {
        this.actorType = actorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MonitorV1Event withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_data")
    public Object eventData;
    public MonitorV1Event withEventData(Object eventData) {
        this.eventData = eventData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("event_date")
    public OffsetDateTime eventDate;
    public MonitorV1Event withEventDate(OffsetDateTime eventDate) {
        this.eventDate = eventDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_type")
    public String eventType;
    public MonitorV1Event withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public MonitorV1Event withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_sid")
    public String resourceSid;
    public MonitorV1Event withResourceSid(String resourceSid) {
        this.resourceSid = resourceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public MonitorV1Event withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public MonitorV1Event withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public MonitorV1Event withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ip_address")
    public String sourceIpAddress;
    public MonitorV1Event withSourceIpAddress(String sourceIpAddress) {
        this.sourceIpAddress = sourceIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MonitorV1Event withUrl(String url) {
        this.url = url;
        return this;
    }
}