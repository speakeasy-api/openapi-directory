package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportingInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportingInstruction")
    public ReportingInstructionReportingInstruction reportingInstruction;
    public ReportingInstruction withReportingInstruction(ReportingInstructionReportingInstruction reportingInstruction) {
        this.reportingInstruction = reportingInstruction;
        return this;
    }
}