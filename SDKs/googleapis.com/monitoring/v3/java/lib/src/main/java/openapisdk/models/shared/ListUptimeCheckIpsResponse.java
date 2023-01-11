package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUptimeCheckIpsResponse
 * The protocol for the ListUptimeCheckIps response.
**/
public class ListUptimeCheckIpsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListUptimeCheckIpsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uptimeCheckIps")
    public UptimeCheckIp[] uptimeCheckIps;
    public ListUptimeCheckIpsResponse withUptimeCheckIps(UptimeCheckIp[] uptimeCheckIps) {
        this.uptimeCheckIps = uptimeCheckIps;
        return this;
    }
}