package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Subscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Object custom;
    public Subscription withCustom(Object custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database_hold_time_h")
    public Long databaseHoldTimeH;
    public Subscription withDatabaseHoldTimeH(Long databaseHoldTimeH) {
        this.databaseHoldTimeH = databaseHoldTimeH;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Subscription withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events_url")
    public String eventsUrl;
    public Subscription withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Subscription withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("populate_events")
    public Boolean populateEvents;
    public Subscription withPopulateEvents(Boolean populateEvents) {
        this.populateEvents = populateEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_delivery_last_failure")
    public java.util.Map<String, Object> targetDeliveryLastFailure;
    public Subscription withTargetDeliveryLastFailure(java.util.Map<String, Object> targetDeliveryLastFailure) {
        this.targetDeliveryLastFailure = targetDeliveryLastFailure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_delivery_status")
    public java.util.Map<String, Object> targetDeliveryStatus;
    public Subscription withTargetDeliveryStatus(java.util.Map<String, Object> targetDeliveryStatus) {
        this.targetDeliveryStatus = targetDeliveryStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_retry")
    public Boolean targetRetry;
    public Subscription withTargetRetry(Boolean targetRetry) {
        this.targetRetry = targetRetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_url")
    public String targetUrl;
    public Subscription withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public Subscription withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_updated")
    public String timeUpdated;
    public Subscription withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic_filter")
    public String topicFilter;
    public Subscription withTopicFilter(String topicFilter) {
        this.topicFilter = topicFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Subscription withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verify_target_certificate")
    public Boolean verifyTargetCertificate;
    public Subscription withVerifyTargetCertificate(Boolean verifyTargetCertificate) {
        this.verifyTargetCertificate = verifyTargetCertificate;
        return this;
    }
}