package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplaceSitesResponse
 * Response message for SiteService.ReplaceSites.
**/
public class ReplaceSitesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sites")
    public Site[] sites;
    public ReplaceSitesResponse withSites(Site[] sites) {
        this.sites = sites;
        return this;
    }
}