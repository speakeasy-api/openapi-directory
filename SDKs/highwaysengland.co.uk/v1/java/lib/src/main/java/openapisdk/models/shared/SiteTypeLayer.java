package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SiteTypeLayer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sites")
    public Sites[] sites;
    public SiteTypeLayer withSites(Sites[] sites) {
        this.sites = sites;
        return this;
    }
}