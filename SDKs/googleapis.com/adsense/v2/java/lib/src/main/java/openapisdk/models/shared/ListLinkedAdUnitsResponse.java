package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLinkedAdUnitsResponse
 * Response definition for the ad units linked to a custom channel list rpc.
**/
public class ListLinkedAdUnitsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adUnits")
    public AdUnit[] adUnits;
    public ListLinkedAdUnitsResponse withAdUnits(AdUnit[] adUnits) {
        this.adUnits = adUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLinkedAdUnitsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}