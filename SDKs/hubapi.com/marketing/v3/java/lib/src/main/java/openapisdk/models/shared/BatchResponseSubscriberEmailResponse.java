package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BatchResponseSubscriberEmailResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("completedAt")
    public OffsetDateTime completedAt;
    public BatchResponseSubscriberEmailResponse withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public StandardError[] errors;
    public BatchResponseSubscriberEmailResponse withErrors(StandardError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, String> links;
    public BatchResponseSubscriberEmailResponse withLinks(java.util.Map<String, String> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numErrors")
    public Integer numErrors;
    public BatchResponseSubscriberEmailResponse withNumErrors(Integer numErrors) {
        this.numErrors = numErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedAt")
    public OffsetDateTime requestedAt;
    public BatchResponseSubscriberEmailResponse withRequestedAt(OffsetDateTime requestedAt) {
        this.requestedAt = requestedAt;
        return this;
    }
    @JsonProperty("results")
    public SubscriberEmailResponse[] results;
    public BatchResponseSubscriberEmailResponse withResults(SubscriberEmailResponse[] results) {
        this.results = results;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startedAt")
    public OffsetDateTime startedAt;
    public BatchResponseSubscriberEmailResponse withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonProperty("status")
    public BatchResponseSubscriberEmailResponseStatusEnum status;
    public BatchResponseSubscriberEmailResponse withStatus(BatchResponseSubscriberEmailResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}