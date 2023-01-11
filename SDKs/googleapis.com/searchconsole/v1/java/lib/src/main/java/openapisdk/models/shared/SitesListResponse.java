package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SitesListResponse
 * List of sites with access level information.
**/
public class SitesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteEntry")
    public WmxSite[] siteEntry;
    public SitesListResponse withSiteEntry(WmxSite[] siteEntry) {
        this.siteEntry = siteEntry;
        return this;
    }
}