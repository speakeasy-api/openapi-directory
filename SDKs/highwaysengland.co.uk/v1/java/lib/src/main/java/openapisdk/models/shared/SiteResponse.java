package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SiteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_count")
    public Integer rowCount;
    public SiteResponse withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sites")
    public SiteResult[] sites;
    public SiteResponse withSites(SiteResult[] sites) {
        this.sites = sites;
        return this;
    }
}