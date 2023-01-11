package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddTargetedSitesRequest
 * A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
**/
public class AddTargetedSitesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sites")
    public String[] sites;
    public AddTargetedSitesRequest withSites(String[] sites) {
        this.sites = sites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingMode")
    public AddTargetedSitesRequestTargetingModeEnum targetingMode;
    public AddTargetedSitesRequest withTargetingMode(AddTargetedSitesRequestTargetingModeEnum targetingMode) {
        this.targetingMode = targetingMode;
        return this;
    }
}