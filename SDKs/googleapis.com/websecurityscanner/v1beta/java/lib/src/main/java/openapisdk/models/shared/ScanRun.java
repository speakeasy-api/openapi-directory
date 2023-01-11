package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanRun
 * A ScanRun is a output-only resource representing an actual run of the scan. Next id: 12
**/
public class ScanRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public ScanRun withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorTrace")
    public ScanRunErrorTrace errorTrace;
    public ScanRun withErrorTrace(ScanRunErrorTrace errorTrace) {
        this.errorTrace = errorTrace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionState")
    public ScanRunExecutionStateEnum executionState;
    public ScanRun withExecutionState(ScanRunExecutionStateEnum executionState) {
        this.executionState = executionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasVulnerabilities")
    public Boolean hasVulnerabilities;
    public ScanRun withHasVulnerabilities(Boolean hasVulnerabilities) {
        this.hasVulnerabilities = hasVulnerabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ScanRun withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progressPercent")
    public Integer progressPercent;
    public ScanRun withProgressPercent(Integer progressPercent) {
        this.progressPercent = progressPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultState")
    public ScanRunResultStateEnum resultState;
    public ScanRun withResultState(ScanRunResultStateEnum resultState) {
        this.resultState = resultState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public ScanRun withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlsCrawledCount")
    public String urlsCrawledCount;
    public ScanRun withUrlsCrawledCount(String urlsCrawledCount) {
        this.urlsCrawledCount = urlsCrawledCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlsTestedCount")
    public String urlsTestedCount;
    public ScanRun withUrlsTestedCount(String urlsTestedCount) {
        this.urlsTestedCount = urlsTestedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warningTraces")
    public ScanRunWarningTrace[] warningTraces;
    public ScanRun withWarningTraces(ScanRunWarningTrace[] warningTraces) {
        this.warningTraces = warningTraces;
        return this;
    }
}