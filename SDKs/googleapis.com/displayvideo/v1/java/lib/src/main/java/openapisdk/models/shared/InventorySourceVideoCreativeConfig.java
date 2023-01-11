package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InventorySourceVideoCreativeConfig
 * The configuration for video creatives.
**/
public class InventorySourceVideoCreativeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public InventorySourceVideoCreativeConfig withDuration(String duration) {
        this.duration = duration;
        return this;
    }
}