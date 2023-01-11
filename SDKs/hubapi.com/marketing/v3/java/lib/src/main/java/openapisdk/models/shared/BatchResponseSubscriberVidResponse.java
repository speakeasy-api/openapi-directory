package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BatchResponseSubscriberVidResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("completedAt")
    public OffsetDateTime completedAt;
    public BatchResponseSubscriberVidResponse withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public StandardError[] errors;
    public BatchResponseSubscriberVidResponse withErrors(StandardError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, String> links;
    public BatchResponseSubscriberVidResponse withLinks(java.util.Map<String, String> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numErrors")
    public Integer numErrors;
    public BatchResponseSubscriberVidResponse withNumErrors(Integer numErrors) {
        this.numErrors = numErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedAt")
    public OffsetDateTime requestedAt;
    public BatchResponseSubscriberVidResponse withRequestedAt(OffsetDateTime requestedAt) {
        this.requestedAt = requestedAt;
        return this;
    }
    @JsonProperty("results")
    public SubscriberVidResponse[] results;
    public BatchResponseSubscriberVidResponse withResults(SubscriberVidResponse[] results) {
        this.results = results;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startedAt")
    public OffsetDateTime startedAt;
    public BatchResponseSubscriberVidResponse withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonProperty("status")
    public BatchResponseSubscriberVidResponseStatusEnum status;
    public BatchResponseSubscriberVidResponse withStatus(BatchResponseSubscriberVidResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}