package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DatastoreOptions
 * Options defining a data set within Google Cloud Datastore.
**/
public class GooglePrivacyDlpV2DatastoreOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public GooglePrivacyDlpV2KindExpression kind;
    public GooglePrivacyDlpV2DatastoreOptions withKind(GooglePrivacyDlpV2KindExpression kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitionId")
    public GooglePrivacyDlpV2PartitionId partitionId;
    public GooglePrivacyDlpV2DatastoreOptions withPartitionId(GooglePrivacyDlpV2PartitionId partitionId) {
        this.partitionId = partitionId;
        return this;
    }
}