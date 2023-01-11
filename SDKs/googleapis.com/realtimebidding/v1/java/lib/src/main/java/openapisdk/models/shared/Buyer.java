package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Buyer
 * RTB Buyer account information.
**/
public class Buyer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeCreativeCount")
    public String activeCreativeCount;
    public Buyer withActiveCreativeCount(String activeCreativeCount) {
        this.activeCreativeCount = activeCreativeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidder")
    public String bidder;
    public Buyer withBidder(String bidder) {
        this.bidder = bidder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingIds")
    public String[] billingIds;
    public Buyer withBillingIds(String[] billingIds) {
        this.billingIds = billingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Buyer withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumActiveCreativeCount")
    public String maximumActiveCreativeCount;
    public Buyer withMaximumActiveCreativeCount(String maximumActiveCreativeCount) {
        this.maximumActiveCreativeCount = maximumActiveCreativeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Buyer withName(String name) {
        this.name = name;
        return this;
    }
}