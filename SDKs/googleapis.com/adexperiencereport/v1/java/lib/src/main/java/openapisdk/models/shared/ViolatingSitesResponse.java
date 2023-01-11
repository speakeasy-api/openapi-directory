package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ViolatingSitesResponse
 * Response message for ListViolatingSites.
**/
public class ViolatingSitesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violatingSites")
    public SiteSummaryResponse[] violatingSites;
    public ViolatingSitesResponse withViolatingSites(SiteSummaryResponse[] violatingSites) {
        this.violatingSites = violatingSites;
        return this;
    }
}