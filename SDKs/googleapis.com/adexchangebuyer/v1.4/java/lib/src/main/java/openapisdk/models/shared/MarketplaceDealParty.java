package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarketplaceDealParty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public Buyer buyer;
    public MarketplaceDealParty withBuyer(Buyer buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller")
    public Seller seller;
    public MarketplaceDealParty withSeller(Seller seller) {
        this.seller = seller;
        return this;
    }
}