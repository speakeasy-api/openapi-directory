package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestOrderCustomer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public TestOrderCustomer withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitMarketingPreference")
    public Boolean explicitMarketingPreference;
    public TestOrderCustomer withExplicitMarketingPreference(Boolean explicitMarketingPreference) {
        this.explicitMarketingPreference = explicitMarketingPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public TestOrderCustomer withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingRightsInfo")
    public TestOrderCustomerMarketingRightsInfo marketingRightsInfo;
    public TestOrderCustomer withMarketingRightsInfo(TestOrderCustomerMarketingRightsInfo marketingRightsInfo) {
        this.marketingRightsInfo = marketingRightsInfo;
        return this;
    }
}