package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ScanfordevicesRequest {
    @JsonProperty("clear_results")
    public Boolean clearResults;
    public ScanfordevicesRequest withClearResults(Boolean clearResults) {
        this.clearResults = clearResults;
        return this;
    }
    @JsonProperty("enable")
    public Boolean enable;
    public ScanfordevicesRequest withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonProperty("timeout")
    public Integer timeout;
    public ScanfordevicesRequest withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}