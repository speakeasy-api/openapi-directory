package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAuctionPackagesResponse
 * Response message for listing auction packages.
**/
public class ListAuctionPackagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auctionPackages")
    public AuctionPackage[] auctionPackages;
    public ListAuctionPackagesResponse withAuctionPackages(AuctionPackage[] auctionPackages) {
        this.auctionPackages = auctionPackages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAuctionPackagesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}