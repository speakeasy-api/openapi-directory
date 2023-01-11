package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUptimeCheckConfigsResponse
 * The protocol for the ListUptimeCheckConfigs response.
**/
public class ListUptimeCheckConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListUptimeCheckConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListUptimeCheckConfigsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uptimeCheckConfigs")
    public UptimeCheckConfig[] uptimeCheckConfigs;
    public ListUptimeCheckConfigsResponse withUptimeCheckConfigs(UptimeCheckConfig[] uptimeCheckConfigs) {
        this.uptimeCheckConfigs = uptimeCheckConfigs;
        return this;
    }
}