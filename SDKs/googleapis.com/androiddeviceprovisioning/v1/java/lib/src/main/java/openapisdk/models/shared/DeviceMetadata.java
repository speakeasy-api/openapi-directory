package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceMetadata
 * Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
**/
public class DeviceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public java.util.Map<String, String> entries;
    public DeviceMetadata withEntries(java.util.Map<String, String> entries) {
        this.entries = entries;
        return this;
    }
}