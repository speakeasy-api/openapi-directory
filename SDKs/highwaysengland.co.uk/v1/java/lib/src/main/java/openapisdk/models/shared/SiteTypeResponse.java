package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SiteTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_count")
    public Integer rowCount;
    public SiteTypeResponse withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sitetypes")
    public SiteType[] sitetypes;
    public SiteTypeResponse withSitetypes(SiteType[] sitetypes) {
        this.sitetypes = sitetypes;
        return this;
    }
}