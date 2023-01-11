package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CoverageDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependent_coverage")
    public Boolean dependentCoverage;
    public CoverageDetails withDependentCoverage(Boolean dependentCoverage) {
        this.dependentCoverage = dependentCoverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elected_official_coverage")
    public Boolean electedOfficialCoverage;
    public CoverageDetails withElectedOfficialCoverage(Boolean electedOfficialCoverage) {
        this.electedOfficialCoverage = electedOfficialCoverage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retiree_coverage")
    public Boolean retireeCoverage;
    public CoverageDetails withRetireeCoverage(Boolean retireeCoverage) {
        this.retireeCoverage = retireeCoverage;
        return this;
    }
}