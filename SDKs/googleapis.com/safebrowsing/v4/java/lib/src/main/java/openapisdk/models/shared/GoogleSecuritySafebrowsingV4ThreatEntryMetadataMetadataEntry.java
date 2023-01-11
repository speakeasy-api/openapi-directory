package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry
 * A single metadata entry.
**/
public class GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry withValue(String value) {
        this.value = value;
        return this;
    }
}