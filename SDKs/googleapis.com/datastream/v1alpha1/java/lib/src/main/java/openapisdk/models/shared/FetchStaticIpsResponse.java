package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchStaticIpsResponse
 * Response message for a 'FetchStaticIps' response.
**/
public class FetchStaticIpsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public FetchStaticIpsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticIps")
    public String[] staticIps;
    public FetchStaticIpsResponse withStaticIps(String[] staticIps) {
        this.staticIps = staticIps;
        return this;
    }
}