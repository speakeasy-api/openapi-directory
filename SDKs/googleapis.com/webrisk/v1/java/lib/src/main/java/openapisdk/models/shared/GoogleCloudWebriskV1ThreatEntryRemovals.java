package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1ThreatEntryRemovals
 * Contains the set of entries to remove from a local database.
**/
public class GoogleCloudWebriskV1ThreatEntryRemovals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawIndices")
    public GoogleCloudWebriskV1RawIndices rawIndices;
    public GoogleCloudWebriskV1ThreatEntryRemovals withRawIndices(GoogleCloudWebriskV1RawIndices rawIndices) {
        this.rawIndices = rawIndices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riceIndices")
    public GoogleCloudWebriskV1RiceDeltaEncoding riceIndices;
    public GoogleCloudWebriskV1ThreatEntryRemovals withRiceIndices(GoogleCloudWebriskV1RiceDeltaEncoding riceIndices) {
        this.riceIndices = riceIndices;
        return this;
    }
}