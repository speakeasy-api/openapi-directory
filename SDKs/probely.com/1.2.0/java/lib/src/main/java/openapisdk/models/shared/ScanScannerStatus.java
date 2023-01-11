package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanScannerStatus
 * The number of scanner tasks completed and total number of tasks in the queue
**/
public class ScanScannerStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("0")
    public Long zero;
    public ScanScannerStatus withZero(Long zero) {
        this.zero = zero;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("1")
    public Long one;
    public ScanScannerStatus withOne(Long one) {
        this.one = one;
        return this;
    }
}