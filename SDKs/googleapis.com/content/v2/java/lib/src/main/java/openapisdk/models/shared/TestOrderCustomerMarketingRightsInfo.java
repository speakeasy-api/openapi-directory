package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestOrderCustomerMarketingRightsInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitMarketingPreference")
    public String explicitMarketingPreference;
    public TestOrderCustomerMarketingRightsInfo withExplicitMarketingPreference(String explicitMarketingPreference) {
        this.explicitMarketingPreference = explicitMarketingPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedTimestamp")
    public String lastUpdatedTimestamp;
    public TestOrderCustomerMarketingRightsInfo withLastUpdatedTimestamp(String lastUpdatedTimestamp) {
        this.lastUpdatedTimestamp = lastUpdatedTimestamp;
        return this;
    }
}