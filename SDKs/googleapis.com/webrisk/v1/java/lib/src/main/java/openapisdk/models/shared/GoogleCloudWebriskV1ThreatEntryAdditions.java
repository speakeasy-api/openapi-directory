package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1ThreatEntryAdditions
 * Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
**/
public class GoogleCloudWebriskV1ThreatEntryAdditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawHashes")
    public GoogleCloudWebriskV1RawHashes[] rawHashes;
    public GoogleCloudWebriskV1ThreatEntryAdditions withRawHashes(GoogleCloudWebriskV1RawHashes[] rawHashes) {
        this.rawHashes = rawHashes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riceHashes")
    public GoogleCloudWebriskV1RiceDeltaEncoding riceHashes;
    public GoogleCloudWebriskV1ThreatEntryAdditions withRiceHashes(GoogleCloudWebriskV1RiceDeltaEncoding riceHashes) {
        this.riceHashes = riceHashes;
        return this;
    }
}