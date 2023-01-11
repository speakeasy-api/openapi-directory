package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Bidder
 * Bidder settings.
**/
public class Bidder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bypassNonguaranteedDealsPretargeting")
    public Boolean bypassNonguaranteedDealsPretargeting;
    public Bidder withBypassNonguaranteedDealsPretargeting(Boolean bypassNonguaranteedDealsPretargeting) {
        this.bypassNonguaranteedDealsPretargeting = bypassNonguaranteedDealsPretargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookieMatchingNetworkId")
    public String cookieMatchingNetworkId;
    public Bidder withCookieMatchingNetworkId(String cookieMatchingNetworkId) {
        this.cookieMatchingNetworkId = cookieMatchingNetworkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookieMatchingUrl")
    public String cookieMatchingUrl;
    public Bidder withCookieMatchingUrl(String cookieMatchingUrl) {
        this.cookieMatchingUrl = cookieMatchingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealsBillingId")
    public String dealsBillingId;
    public Bidder withDealsBillingId(String dealsBillingId) {
        this.dealsBillingId = dealsBillingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Bidder withName(String name) {
        this.name = name;
        return this;
    }
}