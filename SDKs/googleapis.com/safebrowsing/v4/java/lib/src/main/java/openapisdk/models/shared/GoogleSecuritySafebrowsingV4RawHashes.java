package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4RawHashes
 * The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
**/
public class GoogleSecuritySafebrowsingV4RawHashes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixSize")
    public Integer prefixSize;
    public GoogleSecuritySafebrowsingV4RawHashes withPrefixSize(Integer prefixSize) {
        this.prefixSize = prefixSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawHashes")
    public String rawHashes;
    public GoogleSecuritySafebrowsingV4RawHashes withRawHashes(String rawHashes) {
        this.rawHashes = rawHashes;
        return this;
    }
}