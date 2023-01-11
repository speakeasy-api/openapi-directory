package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditSitesResponse
 * Response message for SiteService.BulkEditSites.
**/
public class BulkEditSitesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sites")
    public Site[] sites;
    public BulkEditSitesResponse withSites(Site[] sites) {
        this.sites = sites;
        return this;
    }
}