package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1RawHashes
 * The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
**/
public class GoogleCloudWebriskV1RawHashes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixSize")
    public Integer prefixSize;
    public GoogleCloudWebriskV1RawHashes withPrefixSize(Integer prefixSize) {
        this.prefixSize = prefixSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawHashes")
    public String rawHashes;
    public GoogleCloudWebriskV1RawHashes withRawHashes(String rawHashes) {
        this.rawHashes = rawHashes;
        return this;
    }
}