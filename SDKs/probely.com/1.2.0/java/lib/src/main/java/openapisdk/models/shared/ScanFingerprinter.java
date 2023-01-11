package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanFingerprinter
 * Information on the status of the crawling step of the scanning process
**/
public class ScanFingerprinter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public ScanFingerprinter withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String[] error;
    public ScanFingerprinter withError(String[] error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ScanFingerprinterStateEnum state;
    public ScanFingerprinter withState(ScanFingerprinterStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public String[] warning;
    public ScanFingerprinter withWarning(String[] warning) {
        this.warning = warning;
        return this;
    }
}