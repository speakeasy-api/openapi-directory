package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportWarning
 * Warnings associated with generation of the report.
**/
public class ReportWarning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReportWarning withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ReportWarningTypeEnum type;
    public ReportWarning withType(ReportWarningTypeEnum type) {
        this.type = type;
        return this;
    }
}