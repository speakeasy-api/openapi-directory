package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LodgingMetadata
 * Metadata for the Lodging.
**/
public class LodgingMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public LodgingMetadata withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}