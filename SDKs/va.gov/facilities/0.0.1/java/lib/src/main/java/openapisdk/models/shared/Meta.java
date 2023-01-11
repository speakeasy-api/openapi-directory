package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Meta
 * JSON API-compliant object containing metadata about this response
**/
public class Meta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("band_version")
    public String bandVersion;
    public Meta withBandVersion(String bandVersion) {
        this.bandVersion = bandVersion;
        return this;
    }
}