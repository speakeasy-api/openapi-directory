package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Key
 * A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
**/
public class GooglePrivacyDlpV2Key {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitionId")
    public GooglePrivacyDlpV2PartitionId partitionId;
    public GooglePrivacyDlpV2Key withPartitionId(GooglePrivacyDlpV2PartitionId partitionId) {
        this.partitionId = partitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public GooglePrivacyDlpV2PathElement[] path;
    public GooglePrivacyDlpV2Key withPath(GooglePrivacyDlpV2PathElement[] path) {
        this.path = path;
        return this;
    }
}