package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBuyersResponse
 * A response containing buyer account information.
**/
public class ListBuyersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyers")
    public Buyer[] buyers;
    public ListBuyersResponse withBuyers(Buyer[] buyers) {
        this.buyers = buyers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBuyersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}