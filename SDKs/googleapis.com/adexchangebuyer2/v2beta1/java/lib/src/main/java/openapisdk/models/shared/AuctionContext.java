package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuctionContext
 * Output only. The auction type the restriction applies to.
**/
public class AuctionContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auctionTypes")
    public AuctionContextAuctionTypesEnum[] auctionTypes;
    public AuctionContext withAuctionTypes(AuctionContextAuctionTypesEnum[] auctionTypes) {
        this.auctionTypes = auctionTypes;
        return this;
    }
}