package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarketplaceLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public MarketplaceLabel withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTimeMs")
    public String createTimeMs;
    public MarketplaceLabel withCreateTimeMs(String createTimeMs) {
        this.createTimeMs = createTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprecatedMarketplaceDealParty")
    public MarketplaceDealParty deprecatedMarketplaceDealParty;
    public MarketplaceLabel withDeprecatedMarketplaceDealParty(MarketplaceDealParty deprecatedMarketplaceDealParty) {
        this.deprecatedMarketplaceDealParty = deprecatedMarketplaceDealParty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public MarketplaceLabel withLabel(String label) {
        this.label = label;
        return this;
    }
}