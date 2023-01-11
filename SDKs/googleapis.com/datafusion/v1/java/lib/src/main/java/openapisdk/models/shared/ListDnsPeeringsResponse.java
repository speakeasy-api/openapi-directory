package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDnsPeeringsResponse
 * Response message for list DNS peerings.
**/
public class ListDnsPeeringsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsPeerings")
    public DnsPeering[] dnsPeerings;
    public ListDnsPeeringsResponse withDnsPeerings(DnsPeering[] dnsPeerings) {
        this.dnsPeerings = dnsPeerings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDnsPeeringsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}