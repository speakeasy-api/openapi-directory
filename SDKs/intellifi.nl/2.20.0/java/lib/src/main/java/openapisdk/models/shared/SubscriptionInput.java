package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscriptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Object custom;
    public SubscriptionInput withCustom(Object custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database_hold_time_h")
    public Long databaseHoldTimeH;
    public SubscriptionInput withDatabaseHoldTimeH(Long databaseHoldTimeH) {
        this.databaseHoldTimeH = databaseHoldTimeH;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SubscriptionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("populate_events")
    public Boolean populateEvents;
    public SubscriptionInput withPopulateEvents(Boolean populateEvents) {
        this.populateEvents = populateEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_retry")
    public Boolean targetRetry;
    public SubscriptionInput withTargetRetry(Boolean targetRetry) {
        this.targetRetry = targetRetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_url")
    public String targetUrl;
    public SubscriptionInput withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic_filter")
    public String topicFilter;
    public SubscriptionInput withTopicFilter(String topicFilter) {
        this.topicFilter = topicFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verify_target_certificate")
    public Boolean verifyTargetCertificate;
    public SubscriptionInput withVerifyTargetCertificate(Boolean verifyTargetCertificate) {
        this.verifyTargetCertificate = verifyTargetCertificate;
        return this;
    }
}