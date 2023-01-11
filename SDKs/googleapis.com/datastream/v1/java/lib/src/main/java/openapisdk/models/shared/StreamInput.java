package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamInput
 * A resource representing streaming data from a source to a destination.
**/
public class StreamInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backfillAll")
    public BackfillAllStrategy backfillAll;
    public StreamInput withBackfillAll(BackfillAllStrategy backfillAll) {
        this.backfillAll = backfillAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backfillNone")
    public java.util.Map<String, Object> backfillNone;
    public StreamInput withBackfillNone(java.util.Map<String, Object> backfillNone) {
        this.backfillNone = backfillNone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedEncryptionKey")
    public String customerManagedEncryptionKey;
    public StreamInput withCustomerManagedEncryptionKey(String customerManagedEncryptionKey) {
        this.customerManagedEncryptionKey = customerManagedEncryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationConfig")
    public DestinationConfig destinationConfig;
    public StreamInput withDestinationConfig(DestinationConfig destinationConfig) {
        this.destinationConfig = destinationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public StreamInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public StreamInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceConfig")
    public SourceConfig sourceConfig;
    public StreamInput withSourceConfig(SourceConfig sourceConfig) {
        this.sourceConfig = sourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StreamStateEnum state;
    public StreamInput withState(StreamStateEnum state) {
        this.state = state;
        return this;
    }
}