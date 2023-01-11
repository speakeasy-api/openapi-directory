package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Stream
 * A resource representing streaming data from a source to a destination.
**/
public class Stream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backfillAll")
    public BackfillAllStrategy backfillAll;
    public Stream withBackfillAll(BackfillAllStrategy backfillAll) {
        this.backfillAll = backfillAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backfillNone")
    public java.util.Map<String, Object> backfillNone;
    public Stream withBackfillNone(java.util.Map<String, Object> backfillNone) {
        this.backfillNone = backfillNone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Stream withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedEncryptionKey")
    public String customerManagedEncryptionKey;
    public Stream withCustomerManagedEncryptionKey(String customerManagedEncryptionKey) {
        this.customerManagedEncryptionKey = customerManagedEncryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConfig")
    public DestinationConfig destinationConfig;
    public Stream withDestinationConfig(DestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Stream withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public Stream withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Stream withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Stream withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceConfig")
    public SourceConfig sourceConfig;
    public Stream withSourceConfig(SourceConfig sourceConfig) {
        this.sourceConfig = sourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StreamStateEnum state;
    public Stream withState(StreamStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Stream withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}