package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListScanConfigsResponse
 * Response for the `ListScanConfigs` method.
**/
public class ListScanConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListScanConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanConfigs")
    public ScanConfig[] scanConfigs;
    public ListScanConfigsResponse withScanConfigs(ScanConfig[] scanConfigs) {
        this.scanConfigs = scanConfigs;
        return this;
    }
}