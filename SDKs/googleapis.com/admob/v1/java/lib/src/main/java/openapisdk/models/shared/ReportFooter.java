package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportFooter
 * Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
**/
public class ReportFooter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchingRowCount")
    public String matchingRowCount;
    public ReportFooter withMatchingRowCount(String matchingRowCount) {
        this.matchingRowCount = matchingRowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public ReportWarning[] warnings;
    public ReportFooter withWarnings(ReportWarning[] warnings) {
        this.warnings = warnings;
        return this;
    }
}