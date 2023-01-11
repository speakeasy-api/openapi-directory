package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatEntrySet
 * A set of threats that should be added or removed from a client's local database.
**/
public class GoogleSecuritySafebrowsingV4ThreatEntrySet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compressionType")
    public GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum compressionType;
    public GoogleSecuritySafebrowsingV4ThreatEntrySet withCompressionType(GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum compressionType) {
        this.compressionType = compressionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawHashes")
    public GoogleSecuritySafebrowsingV4RawHashes rawHashes;
    public GoogleSecuritySafebrowsingV4ThreatEntrySet withRawHashes(GoogleSecuritySafebrowsingV4RawHashes rawHashes) {
        this.rawHashes = rawHashes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawIndices")
    public GoogleSecuritySafebrowsingV4RawIndices rawIndices;
    public GoogleSecuritySafebrowsingV4ThreatEntrySet withRawIndices(GoogleSecuritySafebrowsingV4RawIndices rawIndices) {
        this.rawIndices = rawIndices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riceHashes")
    public GoogleSecuritySafebrowsingV4RiceDeltaEncoding riceHashes;
    public GoogleSecuritySafebrowsingV4ThreatEntrySet withRiceHashes(GoogleSecuritySafebrowsingV4RiceDeltaEncoding riceHashes) {
        this.riceHashes = riceHashes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riceIndices")
    public GoogleSecuritySafebrowsingV4RiceDeltaEncoding riceIndices;
    public GoogleSecuritySafebrowsingV4ThreatEntrySet withRiceIndices(GoogleSecuritySafebrowsingV4RiceDeltaEncoding riceIndices) {
        this.riceIndices = riceIndices;
        return this;
    }
}