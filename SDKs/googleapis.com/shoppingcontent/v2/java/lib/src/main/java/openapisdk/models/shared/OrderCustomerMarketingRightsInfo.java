package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderCustomerMarketingRightsInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitMarketingPreference")
    public String explicitMarketingPreference;
    public OrderCustomerMarketingRightsInfo withExplicitMarketingPreference(String explicitMarketingPreference) {
        this.explicitMarketingPreference = explicitMarketingPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedTimestamp")
    public String lastUpdatedTimestamp;
    public OrderCustomerMarketingRightsInfo withLastUpdatedTimestamp(String lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingEmailAddress")
    public String marketingEmailAddress;
    public OrderCustomerMarketingRightsInfo withMarketingEmailAddress(String marketingEmailAddress) {
        this.marketingEmailAddress = marketingEmailAddress;
        return this;
    }
}