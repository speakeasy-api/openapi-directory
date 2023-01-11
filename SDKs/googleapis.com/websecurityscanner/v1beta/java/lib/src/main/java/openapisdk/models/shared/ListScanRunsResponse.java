package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListScanRunsResponse
 * Response for the `ListScanRuns` method.
**/
public class ListScanRunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListScanRunsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanRuns")
    public ScanRun[] scanRuns;
    public ListScanRunsResponse withScanRuns(ScanRun[] scanRuns) {
        this.scanRuns = scanRuns;
        return this;
    }
}