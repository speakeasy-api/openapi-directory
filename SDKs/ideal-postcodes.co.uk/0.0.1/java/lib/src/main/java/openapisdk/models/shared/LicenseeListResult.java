package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LicenseeListResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasMore")
    public Boolean hasMore;
    public LicenseeListResult withHasMore(Boolean hasMore) {
        this.hasMore = hasMore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licensees")
    public Licensee[] licensees;
    public LicenseeListResult withLicensees(Licensee[] licensees) {
        this.licensees = licensees;
        return this;
    }
}