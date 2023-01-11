package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveTargetedSitesRequest
 * A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
**/
public class RemoveTargetedSitesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sites")
    public String[] sites;
    public RemoveTargetedSitesRequest withSites(String[] sites) {
        this.sites = sites;
        return this;
    }
}