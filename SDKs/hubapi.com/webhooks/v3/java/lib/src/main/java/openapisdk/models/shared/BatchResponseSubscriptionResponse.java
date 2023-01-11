package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BatchResponseSubscriptionResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("completedAt")
    public OffsetDateTime completedAt;
    public BatchResponseSubscriptionResponse withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, String> links;
    public BatchResponseSubscriptionResponse withLinks(java.util.Map<String, String> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedAt")
    public OffsetDateTime requestedAt;
    public BatchResponseSubscriptionResponse withRequestedAt(OffsetDateTime requestedAt) {
        this.requestedAt = requestedAt;
        return this;
    }
    @JsonProperty("results")
    public SubscriptionResponse[] results;
    public BatchResponseSubscriptionResponse withResults(SubscriptionResponse[] results) {
        this.results = results;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startedAt")
    public OffsetDateTime startedAt;
    public BatchResponseSubscriptionResponse withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonProperty("status")
    public BatchResponseSubscriptionResponseStatusEnum status;
    public BatchResponseSubscriptionResponse withStatus(BatchResponseSubscriptionResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}