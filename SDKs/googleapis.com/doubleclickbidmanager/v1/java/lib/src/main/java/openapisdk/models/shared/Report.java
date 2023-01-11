package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Report
 * Represents a report.
**/
public class Report {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public ReportKey key;
    public Report withKey(ReportKey key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ReportMetadata metadata;
    public Report withMetadata(ReportMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public Parameters params;
    public Report withParams(Parameters params) {
        this.params = params;
        return this;
    }
}