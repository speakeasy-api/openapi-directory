package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Configuration data for an Ad Exchange buyer account.
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidderLocation")
    public AccountBidderLocation[] bidderLocation;
    public Account withBidderLocation(AccountBidderLocation[] bidderLocation) {
        this.bidderLocation = bidderLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookieMatchingNid")
    public String cookieMatchingNid;
    public Account withCookieMatchingNid(String cookieMatchingNid) {
        this.cookieMatchingNid = cookieMatchingNid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookieMatchingUrl")
    public String cookieMatchingUrl;
    public Account withCookieMatchingUrl(String cookieMatchingUrl) {
        this.cookieMatchingUrl = cookieMatchingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public Account withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Account withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumActiveCreatives")
    public Integer maximumActiveCreatives;
    public Account withMaximumActiveCreatives(Integer maximumActiveCreatives) {
        this.maximumActiveCreatives = maximumActiveCreatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumTotalQps")
    public Integer maximumTotalQps;
    public Account withMaximumTotalQps(Integer maximumTotalQps) {
        this.maximumTotalQps = maximumTotalQps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberActiveCreatives")
    public Integer numberActiveCreatives;
    public Account withNumberActiveCreatives(Integer numberActiveCreatives) {
        this.numberActiveCreatives = numberActiveCreatives;
        return this;
    }
}