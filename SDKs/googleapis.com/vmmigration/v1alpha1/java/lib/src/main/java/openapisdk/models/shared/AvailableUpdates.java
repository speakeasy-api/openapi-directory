package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AvailableUpdates
 * Holds informatiom about the available versions for upgrade.
**/
public class AvailableUpdates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inPlaceUpdate")
    public ApplianceVersion inPlaceUpdate;
    public AvailableUpdates withInPlaceUpdate(ApplianceVersion inPlaceUpdate) {
        this.inPlaceUpdate = inPlaceUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newDeployableAppliance")
    public ApplianceVersion newDeployableAppliance;
    public AvailableUpdates withNewDeployableAppliance(ApplianceVersion newDeployableAppliance) {
        this.newDeployableAppliance = newDeployableAppliance;
        return this;
    }
}