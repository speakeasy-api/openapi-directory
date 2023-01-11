package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAdUnitsResponse
 * Response definition for the adunit list rpc.
**/
public class ListAdUnitsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adUnits")
    public AdUnit[] adUnits;
    public ListAdUnitsResponse withAdUnits(AdUnit[] adUnits) {
        this.adUnits = adUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAdUnitsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}