package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanRunErrorTrace
 * Output only. Defines an error trace message for a ScanRun.
**/
public class ScanRunErrorTrace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ScanRunErrorTraceCodeEnum code;
    public ScanRunErrorTrace withCode(ScanRunErrorTraceCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mostCommonHttpErrorCode")
    public Integer mostCommonHttpErrorCode;
    public ScanRunErrorTrace withMostCommonHttpErrorCode(Integer mostCommonHttpErrorCode) {
        this.mostCommonHttpErrorCode = mostCommonHttpErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanConfigError")
    public ScanConfigError scanConfigError;
    public ScanRunErrorTrace withScanConfigError(ScanConfigError scanConfigError) {
        this.scanConfigError = scanConfigError;
        return this;
    }
}