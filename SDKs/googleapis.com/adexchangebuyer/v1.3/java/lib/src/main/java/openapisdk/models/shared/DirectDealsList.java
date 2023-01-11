package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectDealsList
 * A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.
**/
public class DirectDealsList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDeals")
    public DirectDeal[] directDeals;
    public DirectDealsList withDirectDeals(DirectDeal[] directDeals) {
        this.directDeals = directDeals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DirectDealsList withKind(String kind) {
        this.kind = kind;
        return this;
    }
}