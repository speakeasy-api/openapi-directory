package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceTierSet
 * A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.
**/
public class DeviceTierSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTiers")
    public DeviceTier[] deviceTiers;
    public DeviceTierSet withDeviceTiers(DeviceTier[] deviceTiers) {
        this.deviceTiers = deviceTiers;
        return this;
    }
}