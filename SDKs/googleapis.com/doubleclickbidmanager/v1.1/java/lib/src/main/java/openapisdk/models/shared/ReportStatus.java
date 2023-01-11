package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportStatus
 * Report status.
**/
public class ReportStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure")
    public ReportFailure failure;
    public ReportStatus withFailure(ReportFailure failure) {
        this.failure = failure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finishTimeMs")
    public String finishTimeMs;
    public ReportStatus withFinishTimeMs(String finishTimeMs) {
        this.finishTimeMs = finishTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public ReportStatusFormatEnum format;
    public ReportStatus withFormat(ReportStatusFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ReportStatusStateEnum state;
    public ReportStatus withState(ReportStatusStateEnum state) {
        this.state = state;
        return this;
    }
}