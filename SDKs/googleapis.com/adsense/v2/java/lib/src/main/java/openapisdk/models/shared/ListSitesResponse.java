package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSitesResponse
 * Response definition for the sites list rpc.
**/
public class ListSitesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSitesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sites")
    public Site[] sites;
    public ListSitesResponse withSites(Site[] sites) {
        this.sites = sites;
        return this;
    }
}