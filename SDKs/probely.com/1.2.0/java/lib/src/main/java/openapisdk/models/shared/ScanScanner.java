package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanScanner
 * Information on the status of the search for vulnerabilities of the scanning process
**/
public class ScanScanner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String[] error;
    public ScanScanner withError(String[] error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ScanScannerStateEnum state;
    public ScanScanner withState(ScanScannerStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ScanScannerStatus status;
    public ScanScanner withStatus(ScanScannerStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public String[] warning;
    public ScanScanner withWarning(String[] warning) {
        this.warning = warning;
        return this;
    }
}