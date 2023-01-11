package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatEntryMetadata
 * The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.
**/
public class GoogleSecuritySafebrowsingV4ThreatEntryMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry[] entries;
    public GoogleSecuritySafebrowsingV4ThreatEntryMetadata withEntries(GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry[] entries) {
        this.entries = entries;
        return this;
    }
}