package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanRunWarningTrace
 * Output only. Defines a warning trace message for ScanRun. Warning traces provide customers with useful information that helps make the scanning process more effective.
**/
public class ScanRunWarningTrace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ScanRunWarningTraceCodeEnum code;
    public ScanRunWarningTrace withCode(ScanRunWarningTraceCodeEnum code) {
        this.code = code;
        return this;
    }
}